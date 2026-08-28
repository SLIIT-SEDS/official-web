import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 2000;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;

const rateLimitMap = new Map<string, number[]>();

type InquiryPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown;
};

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

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) ?? [];
  const recent = timestamps.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    rateLimitMap.set(ip, recent);
    return true;
  }

  recent.push(now);
  rateLimitMap.set(ip, recent);
  return false;
}

function validatePayload(body: InquiryPayload) {
  if (typeof body.website === 'string' && body.website.trim() !== '') {
    return { isBot: true as const };
  }

  if (
    typeof body.name !== 'string' ||
    typeof body.email !== 'string' ||
    typeof body.message !== 'string'
  ) {
    return {
      isBot: false as const,
      error: 'Name, email, and inquiry are required.',
    };
  }

  const name = body.name.trim();
  const email = body.email.trim();
  const message = body.message.trim();

  if (!name || !email || !message) {
    return {
      isBot: false as const,
      error: 'Name, email, and inquiry are required.',
    };
  }

  if (name.length > MAX_NAME_LENGTH) {
    return {
      isBot: false as const,
      error: `Name must be ${MAX_NAME_LENGTH} characters or fewer.`,
    };
  }

  if (email.length > MAX_EMAIL_LENGTH) {
    return {
      isBot: false as const,
      error: `Email must be ${MAX_EMAIL_LENGTH} characters or fewer.`,
    };
  }

  if (!EMAIL_REGEX.test(email)) {
    return {
      isBot: false as const,
      error: 'Please provide a valid email address.',
    };
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return {
      isBot: false as const,
      error: `Inquiry must be ${MAX_MESSAGE_LENGTH} characters or fewer.`,
    };
  }

  return {
    isBot: false as const,
    data: { name, email, message },
  };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed.',
    });
  }

  const ip = getClientIp(req);

  if (isRateLimited(ip)) {
    return res.status(429).json({
      success: false,
      message: 'Too many requests. Please try again later.',
    });
  }

  const validation = validatePayload((req.body ?? {}) as InquiryPayload);

  if (validation.isBot) {
    return res.status(200).json({
      success: true,
      message: 'Inquiry sent successfully.',
    });
  }

  if ('error' in validation) {
    return res.status(400).json({
      success: false,
      message: validation.error,
    });
  }

  const { name, email, message } = validation.data;
  const smtpEmail = process.env.SMTP_EMAIL;
  const smtpPassword = process.env.SMTP_PASSWORD;

  if (!smtpEmail || !smtpPassword) {
    console.error('SMTP credentials are not configured.');
    return res.status(500).json({
      success: false,
      message: 'Unable to send inquiry. Please try again later.',
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: smtpEmail,
        pass: smtpPassword,
      },
    });

    await transporter.sendMail({
      from: smtpEmail,
      to: smtpEmail,
      replyTo: email,
      subject: `New Inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nYour Inquiry:\n${message}`,
    });

    return res.status(200).json({
      success: true,
      message: 'Inquiry sent successfully.',
    });
  } catch (error) {
    console.error('Failed to send inquiry email:', error);

    return res.status(500).json({
      success: false,
      message: 'Unable to send inquiry. Please try again later.',
    });
  }
}
