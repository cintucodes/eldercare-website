Support & Production Configuration
===============================

This document describes environment variables and configuration to run the `app/api/contact` route in production safely (webhook/email delivery, reCAPTCHA, and rate-limiting).

Required / optional environment variables
- `NODE_ENV` — `production` or `development`. In `production` the route will refuse to store data locally unless an upstream is configured.
- `SUPPORT_WEBHOOK_URL` — (optional) URL to POST the support JSON to (e.g., a server, Zapier webhook, or issue-tracker endpoint). If set, the route forwards the payload and does not write local files.
- `SUPPORT_SENDGRID_API_KEY` — (optional) If provided (and `SUPPORT_TO_EMAIL` set) the route will send an email via SendGrid as a delivery fallback.
- `SUPPORT_TO_EMAIL` — (optional) Destination email address used with SendGrid.
- `SUPPORT_FROM_EMAIL` — (optional) Sender email for SendGrid. Defaults to `noreply@example.com`.
- `SUPPORT_RECAPTCHA_SECRET` — (optional) Google reCAPTCHA secret. If set, the route requires the client to provide `recaptchaToken` in the request body and verifies it.
- `SUPPORT_RATE_LIMIT_WINDOW_MS` — (optional) Rate-limit window in milliseconds (default: 900000 — 15 minutes).
- `SUPPORT_RATE_LIMIT_MAX` — (optional) Max requests per IP per window (default: 10).

How the route behaves
- If `SUPPORT_WEBHOOK_URL` is set, the route forwards the request JSON to that URL and returns success only if the upstream accepts it.
- Else if `SUPPORT_SENDGRID_API_KEY` and `SUPPORT_TO_EMAIL` are set, the route sends an email using SendGrid.
- Else (development only) the route writes to `data/support-requests.json` on disk.

Security recommendations
- Always run in `production` with an upstream (webhook or SendGrid) configured to avoid writing sensitive data to disk.
- Configure `SUPPORT_RECAPTCHA_SECRET` and verify tokens on the client (see notes below) to reduce spam.
- For reliable rate-limiting in production, use a shared store such as Redis rather than the in-process map.

How to enable reCAPTCHA on the client
1. Register a site at https://www.google.com/recaptcha/admin and obtain site key + secret.
2. Set `SUPPORT_RECAPTCHA_SECRET` in the server environment.
3. On the client, load the reCAPTCHA script and acquire a token, then include `{ recaptchaToken }` in the JSON body sent to `/api/contact`.

Testing locally
- Use the provided helper scripts to avoid PowerShell quoting issues:
  - `node test-post.js` — sends a valid POST to `/api/contact`.
  - `node test-post-invalid.js` — sends an invalid POST and should return 400.

Manual curl example (cmd.exe):
```
curl -X POST http://localhost:3000/api/contact -H "Content-Type: application/json" -d "{\"name\":\"Test\",\"email\":\"test@example.com\",\"message\":\"hello\"}"
```

Deploying to Vercel / Netlify / Azure
- Set the environment variables in the host settings (Project Settings → Environment Variables).
- Do NOT set `NODE_ENV=development` on the server.
- For SendGrid, add `SUPPORT_SENDGRID_API_KEY` and `SUPPORT_TO_EMAIL` (and optional `SUPPORT_FROM_EMAIL`).

Disabling / adjusting the rate limiter for development
- Set `SUPPORT_RATE_LIMIT_MAX` to a large number (e.g., 1000) for local testing.

Next steps
- If you want, I can wire a SendGrid integration end-to-end (requires your SendGrid API key and target email), or set up a Slack/webhook target. Provide the secrets and I will add instructions for storing them securely in your host provider.
