import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Simple in‑memory rate limiter (10 requests per minute per IP)
const RATE_LIMIT = 10;
const WINDOW_MS = 60 * 1000;
const ipRequests = new Map();

function rateLimit(req) {
  const ip = req.headers.get('x-forwarded-for') || req.ip || 'unknown';
  const now = Date.now();

  const record = ipRequests.get(ip) || { count: 0, start: now };
  if (now - record.start > WINDOW_MS) {
    // reset window
    record.count = 1;
    record.start = now;
  } else {
    record.count += 1;
  }
  ipRequests.set(ip, record);
  return record.count <= RATE_LIMIT;
}

// Authentication – expects ADMIN_API_TOKEN env variable
function isAuthorized(req) {
  const authHeader = req.headers.get('authorization') || '';
  const token = authHeader.replace('Bearer ', '').trim();
  return token && token === process.env.ADMIN_API_TOKEN;
}

export async function GET(req) {
  // Rate limiting
  if (!rateLimit(req)) {
    return new NextResponse(
      JSON.stringify({ error: 'Rate limit exceeded' }),
      { status: 429, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // Authentication
  if (!isAuthorized(req)) {
    return new NextResponse(
      JSON.stringify({ error: 'Unauthorized' }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // Load support‑requests JSON
  const dataPath = path.join(process.cwd(), 'data', 'support-requests.json');
  try {
    const raw = await fs.promises.readFile(dataPath, 'utf8');
    const requests = JSON.parse(raw);
    return new NextResponse(JSON.stringify(requests), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ error: 'Failed to read data' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}