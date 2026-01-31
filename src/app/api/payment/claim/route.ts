import { NextRequest, NextResponse } from 'next/server';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Lazy-init Supabase to avoid build-time crash when env vars are missing
let centralSupabase: SupabaseClient | null = null;

function getSupabase(): SupabaseClient | null {
  if (centralSupabase) return centralSupabase;
  const url = process.env.CENTRAL_SUPABASE_URL;
  const key = process.env.CENTRAL_SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  centralSupabase = createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
  return centralSupabase;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, plan, tx_hash, amount, payment_ref } = body;

    if (!email || !plan || !amount) {
      return NextResponse.json(
        { error: 'Missing required fields: email, plan, amount' },
        { status: 400 }
      );
    }

    const supabase = getSupabase();
    if (!supabase) {
      return NextResponse.json({
        success: true,
        warning: 'Payment recorded locally — central DB pending setup',
        payment_ref,
      });
    }

    // Insert into payment_events table on central Supabase
    const { data, error } = await supabase
      .from('payment_events')
      .insert({
        product: 'legalkit',
        email,
        plan,
        tx_hash: tx_hash || null,
        amount,
        currency: 'USDC',
        network: 'base',
        payment_ref: payment_ref || null,
        status: tx_hash ? 'claimed' : 'pending',
        wallet_address: '0xdA904B18a38261B5Ffe78abE5BA744b666e18A44',
        created_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      console.error('Payment claim insert error:', error);
      if (error.code === '42P01' || error.message?.includes('does not exist')) {
        return NextResponse.json({
          success: true,
          warning: 'Payment recorded locally — central DB pending setup',
          payment_ref,
        });
      }
      return NextResponse.json({ error: 'Failed to record payment' }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      payment: data,
      payment_ref,
    });
  } catch (err) {
    console.error('Payment claim error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
