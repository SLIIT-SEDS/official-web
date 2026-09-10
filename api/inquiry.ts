import type { VercelRequest, VercelResponse } from '@vercel/node';
import { processInquiry, type InquiryPayload } from './lib/processInquiry.js';

function getClientIp(req: VercelRequest): string {
  const forwarded = req.headers['x-forwarded-for'];

  if (typeof forwarded === 'string') {
    return forwarded.split(',')[0].trim();
  }

  if (Array.isArray(forwarded) && forwarded.length > 0) {
    return forwarded[0].split(',')[0].trim();
  }

  return req.socket?.remoteAddress ?? 'unknown';
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed.',
    });
  }

  const result = await processInquiry(
    (req.body ?? {}) as InquiryPayload,
    getClientIp(req)
  );

  return res.status(result.status).json(result.body);
}
