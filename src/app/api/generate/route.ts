import { NextRequest, NextResponse } from 'next/server';
import { generateDocuments } from '@/templates';
import { QuestionnaireData } from '@/lib/types';
import { rateLimit, getClientIp } from '@/lib/rate-limit';

export async function POST(request: NextRequest) {
  try {
    // Rate limit: 5 requests per IP per hour
    const ip = getClientIp(request);
    const rl = rateLimit(`generate:${ip}`, { limit: 5, windowSeconds: 3600 });
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil((rl.reset - Date.now()) / 1000)) } }
      );
    }

    const data: QuestionnaireData = await request.json();
    
    // Validate required fields
    if (!data.companyName || !data.companyEmail) {
      return NextResponse.json(
        { error: 'Company name and email are required' },
        { status: 400 }
      );
    }

    if (!data.documents || data.documents.length === 0) {
      return NextResponse.json(
        { error: 'At least one document type must be selected' },
        { status: 400 }
      );
    }

    const documents = generateDocuments(data);

    return NextResponse.json({ 
      success: true, 
      documents,
      disclaimer: 'Generated documents are templates and do not constitute legal advice. Consult a qualified attorney before using in production. LegalKit is a template generator, not a law firm.',
    });
  } catch (error) {
    console.error('Generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate documents' },
      { status: 500 }
    );
  }
}
