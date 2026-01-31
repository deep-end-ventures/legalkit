'use client';

import { useState } from 'react';
import { Mail, Check, Loader2 } from 'lucide-react';

interface EmailCaptureProps {
  source?: string;
  variant?: 'inline' | 'card';
  heading?: string;
  subtext?: string;
  className?: string;
}

export default function EmailCapture({
  source = 'website',
  variant = 'card',
  heading = 'Stay Updated on Legal Compliance',
  subtext = 'Get notified about new document types, regulatory changes, and compliance tips. No spam — just useful updates.',
  className = '',
}: EmailCaptureProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === 'loading') return;

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }
      setStatus('success');
      setEmail('');
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Failed to subscribe');
    }
  }

  if (status === 'success') {
    return (
      <div className={`${variant === 'card' ? 'bg-green-50 border border-green-200 rounded-xl p-6 md:p-8' : ''} ${className}`}>
        <div className="flex items-center gap-3 justify-center text-green-700">
          <Check className="w-6 h-6" />
          <p className="font-semibold text-lg">You&apos;re subscribed!</p>
        </div>
        <p className="text-green-600 text-sm text-center mt-2">
          Check your inbox for a welcome email from LegalKit.
        </p>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
            required
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-semibold transition-colors disabled:opacity-50 whitespace-nowrap"
        >
          {status === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Subscribe'}
        </button>
        {status === 'error' && (
          <p className="text-red-500 text-xs mt-1 absolute -bottom-5">{errorMsg}</p>
        )}
      </form>
    );
  }

  return (
    <div className={`bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-6 md:p-8 ${className}`}>
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium mb-3">
          <Mail className="w-3.5 h-3.5" />
          Newsletter
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{heading}</h3>
        <p className="text-sm text-gray-600 max-w-md mx-auto">{subtext}</p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
          required
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-semibold transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {status === 'loading' ? (
            <><Loader2 className="w-4 h-4 animate-spin" /> Subscribing...</>
          ) : (
            'Get Updates'
          )}
        </button>
      </form>
      {status === 'error' && (
        <p className="text-red-500 text-xs text-center mt-2">{errorMsg}</p>
      )}
      <p className="text-xs text-gray-400 text-center mt-3">No spam. Unsubscribe anytime.</p>
    </div>
  );
}
