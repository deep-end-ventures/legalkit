import { Metadata } from 'next';
import Link from 'next/link';
import { Scale, FileText, Download, Check, Zap, ArrowRight, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Terms of Service Generator — Create Your TOS in Minutes | LegalKit',
  description: 'Generate free, professional terms of service for your website, SaaS, or app. Covers liability, IP, user accounts, payments, and dispute resolution. No signup required.',
  keywords: ['free terms of service generator', 'terms of service template', 'TOS generator', 'terms and conditions generator', 'website terms of service', 'SaaS terms of service'],
  alternates: {
    canonical: '/free-terms-of-service-generator',
  },
  openGraph: {
    title: 'Free Terms of Service Generator | LegalKit',
    description: 'Generate professional terms of service in minutes. Covers liability, IP, and dispute resolution. No signup needed.',
    type: 'website',
    images: ['/og-image.png'],
  },
};

const faqs = [
  {
    question: 'Is this terms of service generator really free?',
    answer: 'Yes! Generate up to 3 documents per month completely free. No credit card or account required for your first document. Our Pro plan ($12/mo) gives you unlimited generation with custom branding.',
  },
  {
    question: 'What\'s the difference between Terms of Service and Terms and Conditions?',
    answer: 'They\'re essentially the same thing. "Terms of Service" (TOS) and "Terms and Conditions" (T&C) both refer to the legal agreement between your business and its users. Some companies also call them "Terms of Use." LegalKit generates all of these — it\'s the same comprehensive document.',
  },
  {
    question: 'Do I legally need terms of service?',
    answer: 'While not always legally required like a privacy policy, terms of service are strongly recommended. They limit your liability, protect your intellectual property, establish dispute resolution procedures, and set rules for user behavior. Without TOS, you have limited legal recourse against misuse of your service.',
  },
  {
    question: 'What sections are included in the generated TOS?',
    answer: 'Our generator creates comprehensive terms covering: acceptance of terms, account registration, user responsibilities, intellectual property, payment terms (if applicable), limitation of liability, indemnification, dispute resolution, termination clauses, and governing law.',
  },
  {
    question: 'Can I use the same TOS for a website and mobile app?',
    answer: 'You can, but we recommend specifying your platform type during generation so the terms address platform-specific concerns (like app store terms for mobile apps, or browser requirements for web apps). You can always edit the generated document to cover both.',
  },
  {
    question: 'How do I make users agree to my terms of service?',
    answer: 'The most common methods are: (1) Clickwrap — requiring users to check a box or click "I agree" before signing up, (2) Browsewrap — displaying a link to your TOS in the footer with a notice that using the site constitutes agreement. Clickwrap is legally stronger.',
  },
  {
    question: 'Should I have a lawyer review the generated TOS?',
    answer: 'Yes, we strongly recommend it. LegalKit generates high-quality templates based on your inputs, but every business has unique circumstances. A qualified attorney can ensure your terms fully protect your specific situation. Our documents are a comprehensive starting point, not a substitute for legal counsel.',
  },
];

export default function FreeTermsOfServiceGeneratorPage() {
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
    name: 'LegalKit Terms of Service Generator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Free terms of service generator for websites, SaaS, and apps. Covers liability, IP, payments, and dispute resolution.',
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
      <section className="bg-gradient-to-br from-purple-50 via-white to-indigo-50 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Scale className="w-4 h-4" />
            100% Free — No Signup Required
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Free Terms of Service<br />
            <span className="text-indigo-600">Generator</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Protect your business with professional terms of service. Covers liability, intellectual property, 
            user accounts, payments, and dispute resolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/generate"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors shadow-lg shadow-indigo-200 inline-flex items-center justify-center gap-2"
            >
              Generate My Terms of Service <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-4">No account needed • Download instantly • Markdown, HTML & PDF</p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">What Your Terms of Service Covers</h2>
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">Comprehensive legal protection for your business</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Acceptance of Terms', desc: 'How users agree to your terms and what constitutes acceptance.' },
              { title: 'Account Registration', desc: 'Account creation rules, responsibilities, and security obligations.' },
              { title: 'Intellectual Property', desc: 'Ownership of content, trademarks, and licensing terms.' },
              { title: 'User Responsibilities', desc: 'Acceptable use policy and prohibited activities on your platform.' },
              { title: 'Payment Terms', desc: 'Billing, refunds, subscription management, and payment processing.' },
              { title: 'Limitation of Liability', desc: 'Cap on damages and disclaimer of warranties to protect your business.' },
              { title: 'Indemnification', desc: 'User obligation to cover costs from their misuse of your service.' },
              { title: 'Dispute Resolution', desc: 'Arbitration clauses, governing law, and venue selection.' },
              { title: 'Termination', desc: 'When and how you can terminate accounts, and effects of termination.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 p-4">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Built for Every Business Type</h2>
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">Our generator adapts to your specific platform and business model</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { emoji: '💻', name: 'SaaS / Web Apps', desc: 'Subscription terms, API access, SLAs' },
              { emoji: '🛒', name: 'E-Commerce', desc: 'Product warranties, shipping, returns' },
              { emoji: '📱', name: 'Mobile Apps', desc: 'App store compliance, push notifications' },
              { emoji: '🌐', name: 'Websites / Blogs', desc: 'Content usage, commenting policies' },
              { emoji: '🏪', name: 'Marketplaces', desc: 'Buyer/seller terms, commission structures' },
              { emoji: '🎯', name: 'Platforms', desc: 'User-generated content, moderation policies' },
            ].map((type) => (
              <div key={type.name} className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 bg-white">
                <span className="text-2xl">{type.emoji}</span>
                <div>
                  <span className="font-semibold text-gray-900">{type.name}</span>
                  <p className="text-xs text-gray-500">{type.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Generate Terms of Service in 3 Steps</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Describe Your Business', desc: 'Tell us about your company type, whether you accept payments, have user accounts, or allow user-generated content.', icon: FileText },
              { step: '2', title: 'Choose Your Options', desc: 'Select your jurisdiction, applicable regulations, and the specific terms you need. Our engine handles the legal language.', icon: Zap },
              { step: '3', title: 'Download & Publish', desc: 'Get your terms in Markdown, HTML, or PDF. Add them to your website footer and registration flow.', icon: Download },
            ].map((item) => (
              <div key={item.step} className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-200">
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-indigo-600" />
                </div>
                <div className="text-sm font-semibold text-indigo-600 mb-2">Step {item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            <HelpCircle className="w-8 h-8 inline-block text-indigo-600 mr-2 -mt-1" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-6 bg-white">
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
              { name: 'Cookie Policy', href: '/free-cookie-policy-generator', desc: 'ePrivacy compliant' },
              { name: 'Refund Policy', href: '/free-refund-policy-generator', desc: 'Clear return terms' },
              { name: 'Disclaimer', href: '/free-disclaimer-generator', desc: 'Limit your liability' },
            ].map((tool) => (
              <Link key={tool.name} href={tool.href} className="p-4 rounded-xl border border-gray-200 bg-white hover:border-indigo-300 hover:shadow-sm transition-all">
                <h3 className="font-semibold text-gray-900 mb-1">{tool.name}</h3>
                <p className="text-xs text-gray-500">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Protect Your Business Today</h2>
          <p className="text-indigo-100 mb-8 text-lg">
            Generate professional terms of service in under 5 minutes. Free.
          </p>
          <Link
            href="/generate"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold transition-colors"
          >
            Generate My Terms of Service — Free <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
