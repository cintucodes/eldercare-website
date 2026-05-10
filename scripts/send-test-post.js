const http = require('http')
const https = require('https')

function postJson(url, data) {
  return new Promise((resolve, reject) => {
    try {
      const parsed = new URL(url)
      const lib = parsed.protocol === 'https:' ? https : http
      const opts = {
        hostname: parsed.hostname,
        port: parsed.port || (parsed.protocol === 'https:' ? 443 : 80),
        path: parsed.pathname + (parsed.search || ''),
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(JSON.stringify(data)) },
      }
      const req = lib.request(opts, (res) => {
        let body = ''
        res.on('data', (c) => body += c)
        res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body }))
      })
      req.on('error', reject)
      req.write(JSON.stringify(data))
      req.end()
    } catch (e) { reject(e) }
  })
}

(async function(){
  const payload = {
    id: Date.now(),
    name: 'Test User',
    email: 'test@example.com',
    message: 'This is a test submission from the automated script.',
    createdAt: new Date().toISOString(),
  }

  const apiUrl = 'http://localhost:3000/api/contact'
  const webhookUrl = 'http://localhost:9000/webhook'

  console.log('Attempting POST to', apiUrl)
  try {
    const r = await postJson(apiUrl, { name: payload.name, email: payload.email, message: payload.message })
    console.log('API response:', r.status, r.body)
    console.log('Assuming API forwarded to webhook; payload that would be sent to webhook:')
    console.log(JSON.stringify(payload, null, 2))
    return
  } catch (err) {
    console.error('POST to /api/contact failed:', err.message)
  }

  console.log('Falling back to POST directly to webhook at', webhookUrl)
  try {
    const r2 = await postJson(webhookUrl, payload)
    console.log('Webhook response:', r2.status, r2.body)
    console.log('Payload sent to webhook:')
    console.log(JSON.stringify(payload, null, 2))
  } catch (err) {
    console.error('POST to webhook failed:', err.message)
    process.exit(1)
  }
})()
