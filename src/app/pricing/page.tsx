'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { PaymentModal } from '@/components/PaymentModal';

const freeFeatures = [
  '3 documents per month',
  'All document types',
  'Download as Markdown & HTML',
  'Standard templates',
  'LegalKit watermark',
];

const proFeatures = [
  'Unlimited documents',
  'All document types',
  'Download as Markdown, HTML & PDF',
  'Custom branding (no watermark)',
  'Bulk export',
  'Priority templates',
  'Document dashboard & versioning',
  'Priority support',
];

export default function PricingPage() {
  const [showPayment, setShowPayment] = useState(false);

  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Simple Pricing
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start free with 3 documents per month. Upgrade to Pro for unlimited generation and premium features.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {/* Free */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900">Free</h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-5xl font-bold text-gray-900">$0</span>
                <span className="text-gray-500">/forever</span>
              </div>
              <p className="mt-3 text-sm text-gray-500">
                Perfect for getting started with basic legal documents.
              </p>
            </div>
            <ul className="mb-8 space-y-3">
              {freeFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2 text-gray-700 text-sm">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/generate"
              className="block w-full text-center bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg font-medium transition-colors"
            >
              Get Started Free
            </Link>
          </div>

          {/* Pro */}
          <div className="bg-indigo-600 rounded-2xl p-8 border border-indigo-500 text-white relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full">
              RECOMMENDED
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold">Pro</h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-5xl font-bold">$12</span>
                <span className="text-indigo-200">/month</span>
              </div>
              <p className="mt-3 text-sm text-indigo-200">
                For businesses that need unlimited documents and custom branding.
              </p>
            </div>
            <ul className="mb-8 space-y-3">
              {proFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2 text-indigo-100 text-sm">
                  <Check className="w-4 h-4 text-indigo-300 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setShowPayment(true)}
              className="block w-full text-center bg-white text-indigo-600 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Upgrade to Pro — $12/mo
            </button>
            <p className="mt-3 text-center text-xs text-indigo-300">
              Pay with USDC on Base network
            </p>
          </div>
        </div>

        {/* Feature Comparison */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Feature Comparison</h2>
          <div className="overflow-hidden rounded-2xl border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-500">Free</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-indigo-600">Pro</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ['Documents per month', '3', 'Unlimited'],
                  ['Document types', 'All', 'All'],
                  ['Markdown & HTML export', '✓', '✓'],
                  ['PDF export', '—', '✓'],
                  ['Custom branding', '—', '✓'],
                  ['Bulk export', '—', '✓'],
                  ['Priority templates', '—', '✓'],
                  ['Document versioning', '—', '✓'],
                  ['Watermark removed', '—', '✓'],
                  ['Priority support', '—', '✓'],
                ].map(([feature, free, pro]) => (
                  <tr key={feature} className="hover:bg-gray-50">
                    <td className="px-6 py-3 text-sm text-gray-700">{feature}</td>
                    <td className="px-6 py-3 text-center text-sm text-gray-400">{free}</td>
                    <td className="px-6 py-3 text-center text-sm text-gray-900 font-medium">{pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'How do I pay?',
                a: 'We accept USDC on the Base network. Click "Upgrade to Pro" and send the payment to the provided wallet address. Your Pro access is activated instantly.',
              },
              {
                q: 'What counts as a document?',
                a: 'Each generation of a privacy policy, terms of service, or cookie policy counts as one document. Re-downloading an existing document is free.',
              },
              {
                q: 'Do free documents expire?',
                a: 'No! Documents you\'ve generated are saved locally and are always accessible. The limit only applies to generating new documents.',
              },
              {
                q: 'Can I remove the LegalKit watermark on Free?',
                a: 'The watermark is only on the free tier. Upgrade to Pro for clean, brandable documents.',
              },
            ].map((item) => (
              <div key={item.q} className="rounded-xl bg-gray-50 border border-gray-200 p-6">
                <h3 className="text-base font-bold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showPayment && (
        <PaymentModal
          onClose={() => setShowPayment(false)}
          onSuccess={() => {
            setShowPayment(false);
            window.location.href = '/dashboard';
          }}
        />
      )}
    </div>
  );
}
