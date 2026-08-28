import type { Plugin } from 'vite';
import { processInquiry, type InquiryPayload } from './api/lib/processInquiry';

function readRequestBody(req: import('http').IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];

    req.on('data', (chunk: Buffer) => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks).toString()));
    req.on('error', reject);
  });
}

export function inquiryApiDevPlugin(env: Record<string, string>): Plugin {
  return {
    name: 'inquiry-api-dev',
    configureServer(server) {
      server.middlewares.use('/api/inquiry', async (req, res, next) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ success: false, message: 'Method not allowed.' }));
          return;
        }

        try {
          const rawBody = await readRequestBody(req);
          const body = JSON.parse(rawBody) as InquiryPayload;
          const ip = req.socket.remoteAddress ?? 'unknown';

          const result = await processInquiry(body, ip, {
            smtpEmail: env.SMTP_EMAIL,
            smtpPassword: env.SMTP_PASSWORD,
          });

          res.statusCode = result.status;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(result.body));
        } catch (error) {
          console.error('Inquiry API dev middleware error:', error);
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(
            JSON.stringify({
              success: false,
              message: 'Unable to send inquiry. Please try again later.',
            })
          );
        }
      });
    },
  };
}
