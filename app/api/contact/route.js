import { promises as fs } from 'fs'
import path from 'path'

// Simple in-memory rate limiter (per-process). For production, replace with
// a distributed store (Redis) so limits persist across instances.
const rateLimitMap = new Map()
const RATE_LIMIT_WINDOW_MS = process.env.SUPPORT_RATE_LIMIT_WINDOW_MS ? parseInt(process.env.SUPPORT_RATE_LIMIT_WINDOW_MS, 10) : 15 * 60 * 1000 // 15m
const RATE_LIMIT_MAX = process.env.SUPPORT_RATE_LIMIT_MAX ? parseInt(process.env.SUPPORT_RATE_LIMIT_MAX, 10) : 10

const DATA_DIR = path.join(process.cwd(), 'data')
const FILE_PATH = path.join(DATA_DIR, 'support-requests.json')

async function storeEntry(entry) {
  const webhook = process.env.SUPPORT_WEBHOOK_URL
  const sendgridKey = process.env.SUPPORT_SENDGRID_API_KEY
  const sendTo = process.env.SUPPORT_TO_EMAIL
  if (webhook) {
    const resp = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entry),
    })
    if (!resp.ok) {
      const text = await resp.text().catch(() => '')
      throw new Error(`Upstream storage error ${resp.status}: ${text || resp.statusText}`)
    }
    return { forwarded: true }
  }

  // SendGrid email fallback when configured (acceptable as upstream storage)
  if (sendgridKey && sendTo) {
    const emailPayload = {
      personalizations: [ { to: [ { email: sendTo } ] } ],
      from: { email: process.env.SUPPORT_FROM_EMAIL || 'noreply@example.com' },
      subject: `New support request from ${entry.email}`,
      content: [ { type: 'text/plain', value: `Name: ${entry.name || '-'}\nEmail: ${entry.email}\nMessage:\n${entry.message}` } ]
    }
    const sg = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${sendgridKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailPayload)
    })
    if (!sg.ok) {
      const text = await sg.text().catch(() => '')
      throw new Error(`SendGrid error ${sg.status}: ${text || sg.statusText}`)
    }
    return { emailed: true }
  }

  // Local file fallback only for development to keep hosted environments safe
  if (process.env.NODE_ENV === 'production') {
    throw new Error('No upstream storage configured in production')
  }

  try {
    await fs.mkdir(DATA_DIR, { recursive: true })
  } catch (e) {
    // ignore mkdir errors
  }

  let existing = []
  try {
    const raw = await fs.readFile(FILE_PATH, 'utf8')
    existing = JSON.parse(raw)
  } catch (e) {
    existing = []
  }

  existing.push(entry)
  await fs.writeFile(FILE_PATH, JSON.stringify(existing, null, 2), 'utf8')
  return { storedLocal: true }
}

async function verifyRecaptcha(token) {
  const secret = process.env.SUPPORT_RECAPTCHA_SECRET
  if (!secret) return true
  if (!token) return false
  try {
    const resp = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(token)}`,
    })
    if (!resp.ok) return false
    const data = await resp.json()
    return !!data.success
  } catch (e) {
    return false
  }
}

function isRateLimited(ip) {
  try {
    const now = Date.now()
    const rec = rateLimitMap.get(ip) || { count: 0, first: now }
    // reset window
    if (now - rec.first > RATE_LIMIT_WINDOW_MS) {
      rec.count = 1
      rec.first = now
    } else {
      rec.count = (rec.count || 0) + 1
    }
    rateLimitMap.set(ip, rec)
    return rec.count > RATE_LIMIT_MAX
  } catch (e) {
    return false
  }
}

export async function POST(req) {
  try {
    const body = await req.json()
    try { console.log('[api/contact] incoming body:', JSON.stringify(body)) } catch (e) {}

    // get IP from headers (best-effort); in production behind proxies, ensure X-Forwarded-For is set
    const ip = (req.headers.get('x-forwarded-for') ?? req.headers.get('x-real-ip') ?? '127.0.0.1').split(',')[0].trim()
    if (isRateLimited(ip)) {
      return new Response(JSON.stringify({ error: 'Too many requests, try again later.' }), { status: 429, headers: { 'Content-Type': 'application/json' } })
    }

    // optional recaptcha: if SUPPORT_RECAPTCHA_SECRET is set we require a token
    const recaptchaToken = body?.recaptchaToken
    if (process.env.SUPPORT_RECAPTCHA_SECRET) {
      const ok = await verifyRecaptcha(recaptchaToken)
      if (!ok) {
        return new Response(JSON.stringify({ error: 'reCAPTCHA verification failed.' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
      }
    }

    // server-side validation
    const email = body?.email ? String(body.email).trim() : ''
    const message = body?.message ? String(body.message).trim() : ''
    const name = body?.name ? String(body.name).trim() : null

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required.' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
    }
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Email is invalid.' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
    }
    if (!message) {
      return new Response(JSON.stringify({ error: 'Message is required.' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
    }

    const entry = {
      id: Date.now(),
      name: name || null,
      email,
      message,
      createdAt: new Date().toISOString(),
    }

    try {
      await storeEntry(entry)
    } catch (writeErr) {
      try { console.error('[api/contact] storage error:', writeErr && writeErr.stack ? writeErr.stack : writeErr) } catch (e) {}
      return new Response(JSON.stringify({ error: 'Failed to store support request.' }), { status: 500, headers: { 'Content-Type': 'application/json' } })
    }

    return new Response(JSON.stringify({ message: 'Support request received.' }), { status: 201, headers: { 'Content-Type': 'application/json' } })
  } catch (err) {
    try { console.error('[api/contact] error:', err && err.stack ? err.stack : err) } catch (e) {}
    return new Response(JSON.stringify({ error: err.message || 'Server error' }), { status: 500, headers: { 'Content-Type': 'application/json' } })
  }
}
