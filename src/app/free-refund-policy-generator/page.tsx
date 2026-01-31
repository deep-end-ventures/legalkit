import { Metadata } from 'next';
import Link from 'next/link';
import { RotateCcw, FileText, Download, Check, Zap, ArrowRight, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Refund Policy Generator — Create Your Return Policy in Minutes | LegalKit',
  description: 'Generate a free, professional refund and return policy for your online store, SaaS, or digital product. Covers subscriptions, digital goods, and physical products. No signup required.',
  keywords: ['free refund policy generator', 'refund policy template', 'return policy generator', 'refund policy for online store', 'SaaS refund policy', 'ecommerce return policy'],
  alternates: {
    canonical: '/free-refund-policy-generator',
  },
  openGraph: {
    title: 'Free Refund Policy Generator | LegalKit',
    description: 'Generate a professional refund policy in minutes. Covers SaaS, e-commerce, and digital goods. No signup needed.',
    type: 'website',
    images: ['/og-image.png'],
  },
};

const faqs = [
  {
    question: 'Is this refund policy generator really free?',
    answer: 'Yes! You can generate refund policies completely free with no signup required. Our generator creates comprehensive policies covering physical goods, digital products, and subscriptions.',
  },
  {
    question: 'Do I legally need a refund policy?',
    answer: 'While not always legally required in all jurisdictions, a clear refund policy is essential for any business that accepts payments. The EU Consumer Rights Directive requires a 14-day cooling-off period for online purchases. Many payment processors (Stripe, PayPal) also require a visible refund policy. Having one reduces chargebacks and builds customer trust.',
  },
  {
    question: 'What should a refund policy include?',
    answer: 'A good refund policy should include: the refund window (e.g., 30 days), eligible items and conditions, how to request a refund, processing timelines, refund method (original payment vs. store credit), and any exceptions or non-refundable items.',
  },
  {
    question: 'Can I customize the refund window?',
    answer: 'Absolutely. You can set your refund window to 7, 14, 30, 60, or 90 days. You can also choose whether refunds go back to the original payment method, as store credit, or give customers the choice.',
  },
  {
    question: 'Does it cover digital products and subscriptions?',
    answer: 'Yes! Our generator includes dedicated sections for digital goods (downloads, licenses, access-based products) and subscription refunds (monthly, annual, free trials). These sections are only included when relevant to your business.',
  },
  {
    question: 'Can I use this for my Shopify / WooCommerce store?',
    answer: 'Yes. The generated refund policy works for any platform — Shopify, WooCommerce, BigCommerce, Squarespace, or custom-built stores. Download in Markdown, HTML, or PDF and add it to your site.',
  },
  {
    question: 'What makes LegalKit\'s refund policy different from templates?',
    answer: 'Unlike static templates, LegalKit generates a policy customized to your specific business type, refund window, payment methods, and product types. The result is a comprehensive, professional document — not a generic fill-in-the-blanks template.',
  },
];

export default function FreeRefundPolicyGeneratorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const softwareJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'LegalKit Refund Policy Generator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Free refund policy generator for online stores, SaaS, and digital products. Covers subscriptions, digital goods, and physical products.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <RotateCcw className="w-4 h-4" />
            100% Free — No Signup Required
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Free Refund Policy<br />
            <span className="text-emerald-600">Generator</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Generate a professional refund and return policy for your online store, SaaS product, or digital business. 
            Customizable refund windows, digital goods coverage, and subscription terms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/generate"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors shadow-lg shadow-emerald-200 inline-flex items-center justify-center gap-2"
            >
              Generate My Refund Policy <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-4">No account needed • Download instantly • Markdown, HTML & PDF</p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">What&apos;s Included in Your Refund Policy</h2>
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">Every refund policy generated by LegalKit covers these essential sections</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Refund Window', desc: 'Clear timeframe for when customers can request refunds (7-90 days, your choice).' },
              { title: 'Eligibility Conditions', desc: 'What qualifies for a refund — product defects, service issues, billing errors.' },
              { title: 'Refund Process', desc: 'Step-by-step instructions for how customers request and receive refunds.' },
              { title: 'Digital Products', desc: 'Special terms for downloads, licenses, and electronically delivered content.' },
              { title: 'Subscription Terms', desc: 'Monthly and annual subscription refund rules, including free trial cancellation.' },
              { title: 'Processing Times', desc: 'Expected timelines for credit cards, PayPal, bank transfers, and store credit.' },
              { title: 'Non-Refundable Items', desc: 'Clear list of items excluded from refunds (gift cards, custom orders, etc.).' },
              { title: 'Chargeback Policy', desc: 'Guidance on contacting you directly before initiating payment disputes.' },
              { title: 'Contact Information', desc: 'How customers can reach your support team to request refunds.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 p-4">
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How to Generate Your Refund Policy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Tell Us About Your Business', desc: 'Answer quick questions about your company type, products, refund window, and payment methods.', icon: FileText },
              { step: '2', title: 'Generate Instantly', desc: 'Our engine creates a comprehensive refund policy customized to your business model and product types.', icon: Zap },
              { step: '3', title: 'Download & Publish', desc: 'Download your refund policy in Markdown, HTML, or PDF. Add it to your website, checkout page, or help center.', icon: Download },
            ].map((item) => (
              <div key={item.step} className="text-center p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-emerald-600" />
                </div>
                <div className="text-sm font-semibold text-emerald-600 mb-2">Step {item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Works for Every Business Type</h2>
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">Generate refund policies tailored to your specific business model</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { icon: '🛒', name: 'E-Commerce', desc: 'Physical product returns' },
              { icon: '💻', name: 'SaaS', desc: 'Subscription refunds' },
              { icon: '📱', name: 'Mobile Apps', desc: 'In-app purchase refunds' },
              { icon: '📥', name: 'Digital Products', desc: 'Downloads & licenses' },
              { icon: '🏪', name: 'Marketplace', desc: 'Multi-vendor policies' },
              { icon: '🎓', name: 'Online Courses', desc: 'Course access refunds' },
            ].map((type) => (
              <div key={type.name} className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 bg-gray-50">
                <span className="text-2xl">{type.icon}</span>
                <div>
                  <span className="font-semibold text-gray-900">{type.name}</span>
                  <p className="text-xs text-gray-500">{type.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">How LegalKit Compares</h2>
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">See why businesses choose LegalKit for their refund policies</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-4 text-sm font-semibold text-gray-700 border-b">Feature</th>
                  <th className="p-4 text-sm font-semibold text-emerald-600 border-b bg-emerald-50">LegalKit</th>
                  <th className="p-4 text-sm font-semibold text-gray-700 border-b">Termly</th>
                  <th className="p-4 text-sm font-semibold text-gray-700 border-b">WebsitePolicies</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Free tier', legalkit: '✅ Unlimited', termly: '✅ Limited', wp: '✅ Basic' },
                  { feature: 'No signup required', legalkit: '✅', termly: '❌', wp: '❌' },
                  { feature: 'Digital goods section', legalkit: '✅', termly: '⚠️ Basic', wp: '⚠️ Basic' },
                  { feature: 'Subscription refunds', legalkit: '✅', termly: '❌', wp: '❌' },
                  { feature: 'PDF export', legalkit: '✅ Free', termly: '💰 Paid', wp: '💰 Paid' },
                  { feature: 'Customizable window', legalkit: '✅ 7-90 days', termly: '✅', wp: '✅' },
                  { feature: 'Chargeback section', legalkit: '✅', termly: '❌', wp: '❌' },
                  { feature: 'Starting price', legalkit: '$0', termly: '$10/mo', wp: '$4.99/mo' },
                ].map((row) => (
                  <tr key={row.feature} className="border-b border-gray-100 last:border-b-0">
                    <td className="p-4 text-sm text-gray-700 font-medium">{row.feature}</td>
                    <td className="p-4 text-sm text-center bg-emerald-50/50 font-medium">{row.legalkit}</td>
                    <td className="p-4 text-sm text-center text-gray-600">{row.termly}</td>
                    <td className="p-4 text-sm text-center text-gray-600">{row.wp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            <HelpCircle className="w-8 h-8 inline-block text-emerald-600 mr-2 -mt-1" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Tools */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">More Free Legal Document Generators</h2>
          <p className="text-gray-600 text-center mb-8 max-w-xl mx-auto">Generate all the legal documents your business needs</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Privacy Policy', href: '/free-privacy-policy-generator', desc: 'GDPR & CCPA compliant' },
              { name: 'Terms of Service', href: '/free-terms-of-service-generator', desc: 'Protect your business' },
              { name: 'Cookie Policy', href: '/free-cookie-policy-generator', desc: 'ePrivacy compliant' },
              { name: 'Disclaimer', href: '/free-disclaimer-generator', desc: 'Limit your liability' },
            ].map((tool) => (
              <Link key={tool.name} href={tool.href} className="p-4 rounded-xl border border-gray-200 bg-white hover:border-emerald-300 hover:shadow-sm transition-all">
                <h3 className="font-semibold text-gray-900 mb-1">{tool.name}</h3>
                <p className="text-xs text-gray-500">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Create Your Refund Policy?</h2>
          <p className="text-emerald-100 mb-8 text-lg">
            It takes less than 5 minutes. No account required.
          </p>
          <Link
            href="/generate"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-emerald-600 px-8 py-4 rounded-xl text-lg font-semibold transition-colors"
          >
            Generate My Refund Policy — Free <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
