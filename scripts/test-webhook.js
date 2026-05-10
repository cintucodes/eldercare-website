const http = require('http');
const port = process.env.PORT || 9000;

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && (req.url === '/webhook' || req.url === '/support')) {
    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', () => {
      try {
        const json = JSON.parse(body);
        console.log('[webhook] received JSON:', JSON.stringify(json, null, 2));
      } catch (e) {
        console.log('[webhook] received text:', body);
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: true }));
    });
    req.on('error', (err) => {
      console.error('[webhook] request error', err);
      res.writeHead(500);
      res.end();
    });
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not found');
});

server.listen(port, () => {
  console.log(`[webhook] listening on http://localhost:${port}/webhook`);
});
