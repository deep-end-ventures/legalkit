import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { rateLimit, getClientIp } from '@/lib/rate-limit';

// Audience ID will be created on first request if needed
const AUDIENCE_NAME = 'LegalKit Subscribers';

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error('RESEND_API_KEY not configured');
  return new Resend(key);
}

async function getOrCreateAudience(resend: Resend): Promise<string> {
  // List existing audiences
  const { data: audiences } = await resend.audiences.list();
  const existing = audiences?.data?.find((a: { name: string }) => a.name === AUDIENCE_NAME);
  if (existing) return existing.id;

  // Create new audience
  const { data: created } = await resend.audiences.create({ name: AUDIENCE_NAME });
  if (!created?.id) throw new Error('Failed to create audience');
  return created.id;
}

export async function POST(req: NextRequest) {
  try {
    // Rate limit: 5 requests per IP per minute
    const ip = getClientIp(req);
    const rl = rateLimit(`subscribe:${ip}`, { limit: 5, windowSeconds: 60 });
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil((rl.reset - Date.now()) / 1000)) } }
      );
    }

    const { email, source } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const resend = getResend();
    const audienceId = await getOrCreateAudience(resend);

    // Add contact to audience
    await resend.contacts.create({
      audienceId,
      email,
      unsubscribed: false,
      firstName: '',
      lastName: '',
    });

    // Send welcome email
    await resend.emails.send({
      from: 'LegalKit <hello@deependventures.com>',
      to: email,
      subject: 'Welcome to LegalKit — Your legal docs, simplified',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="color: #1e1b4b; font-size: 24px; margin-bottom: 8px;">Welcome to LegalKit 🎉</h1>
          <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
            Thanks for subscribing! You'll get updates on:
          </p>
          <ul style="color: #4b5563; font-size: 16px; line-height: 1.8;">
            <li>New document types we add</li>
            <li>Important regulatory changes (GDPR, CCPA, etc.)</li>
            <li>Tips for keeping your legal documents up to date</li>
          </ul>
          <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
            In the meantime, you can generate any of our free legal documents:
          </p>
          <div style="margin: 24px 0;">
            <a href="https://legalkit.deependventures.com/generate" style="display: inline-block; background: #4f46e5; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">Generate a Document →</a>
          </div>
          <p style="color: #9ca3af; font-size: 13px; margin-top: 32px;">
            LegalKit is a product of <a href="https://deependventures.com" style="color: #6366f1;">Deep End Ventures</a>.
            <br/>You're receiving this because you subscribed${source ? ` via ${source}` : ''}. Reply to unsubscribe.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Subscription failed';
    // If it's a duplicate contact, still return success
    if (message.includes('already exists') || message.includes('duplicate')) {
      return NextResponse.json({ success: true, existing: true });
    }
    console.error('Subscribe error:', error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
