import nodemailer from 'nodemailer';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 2000;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;

const rateLimitMap = new Map<string, number[]>();

export type InquiryPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown;
};

export type InquiryResponse = {
  status: number;
  body: {
    success: boolean;
    message: string;
  };
};

type SmtpConfig = {
  smtpEmail?: string;
  smtpPassword?: string;
};

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

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildInquiryEmailContent(name: string, email: string, message: string) {
  const text = `NEW WEBSITE INQUIRY

Name:
${name}

Email:
${email}

Message:
${message}

--------------------------------

Reply directly to this email to contact the sender.`;

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

  const html = `<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:24px;font-family:Arial,Helvetica,sans-serif;color:#111111;line-height:1.6;">
    <h2 style="margin:0 0 20px;font-size:18px;font-weight:700;letter-spacing:0.04em;">
      NEW WEBSITE INQUIRY
    </h2>
    <p style="margin:0 0 16px;">
      <strong>Name:</strong><br />
      ${safeName}
    </p>
    <p style="margin:0 0 16px;">
      <strong>Email:</strong><br />
      <a href="mailto:${safeEmail}">${safeEmail}</a>
    </p>
    <p style="margin:0 0 16px;">
      <strong>Message:</strong><br />
      ${safeMessage}
    </p>
    <hr style="margin:24px 0;border:none;border-top:1px solid #dddddd;" />
    <p style="margin:0;font-size:14px;color:#555555;">
      Reply directly to this email to contact the sender.
    </p>
  </body>
</html>`;

  return { text, html };
}

export async function processInquiry(
  body: InquiryPayload,
  ip: string,
  smtpConfig: SmtpConfig = {}
): Promise<InquiryResponse> {
  if (isRateLimited(ip)) {
    return {
      status: 429,
      body: {
        success: false,
        message: 'Too many requests. Please try again later.',
      },
    };
  }

  const validation = validatePayload(body);

  if (validation.isBot) {
    return {
      status: 200,
      body: {
        success: true,
        message: 'Inquiry sent successfully.',
      },
    };
  }

  if ('error' in validation) {
    return {
      status: 400,
      body: {
        success: false,
        message: validation.error,
      },
    };
  }

  const { name, email, message } = validation.data;
  const smtpEmail = smtpConfig.smtpEmail ?? process.env.SMTP_EMAIL;
  const smtpPassword = smtpConfig.smtpPassword ?? process.env.SMTP_PASSWORD;

  if (!smtpEmail || !smtpPassword) {
    console.error('SMTP credentials are not configured.');
    return {
      status: 500,
      body: {
        success: false,
        message: 'Unable to send inquiry. Please try again later.',
      },
    };
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

    const { text, html } = buildInquiryEmailContent(name, email, message);

    await transporter.sendMail({
      from: `"Official Website" <${smtpEmail}>`,
      to: smtpEmail,
      replyTo: email,
      subject: `New Inquiry from ${name}`,
      text,
      html,
    });

    return {
      status: 200,
      body: {
        success: true,
        message: 'Inquiry sent successfully.',
      },
    };
  } catch (error) {
    console.error('Failed to send inquiry email:', error);

    return {
      status: 500,
      body: {
        success: false,
        message: 'Unable to send inquiry. Please try again later.',
      },
    };
  }
}
