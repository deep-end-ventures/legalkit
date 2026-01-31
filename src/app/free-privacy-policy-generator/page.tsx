import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, FileText, Download, Check, Zap, ArrowRight, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Privacy Policy Generator — Create Your Policy in Minutes | LegalKit',
  description: 'Generate a free, professional privacy policy for your website, app, or business. GDPR, CCPA, and PIPEDA compliant templates. No signup required.',
  keywords: ['free privacy policy generator', 'privacy policy template', 'GDPR privacy policy', 'CCPA privacy policy', 'website privacy policy', 'privacy policy maker'],
  alternates: {
    canonical: '/free-privacy-policy-generator',
  },
  openGraph: {
    title: 'Free Privacy Policy Generator | LegalKit',
    description: 'Generate a professional privacy policy in minutes. GDPR & CCPA compliant. No signup needed.',
    type: 'website',
    images: ['/og-image.png'],
  },
};

const faqs = [
  {
    question: 'Is this privacy policy generator really free?',
    answer: 'Yes! You can generate up to 3 privacy policies per month completely free. No credit card or signup required for your first document. Our Pro plan ($12/mo) offers unlimited generation and additional formats.',
  },
  {
    question: 'Is the generated privacy policy legally compliant?',
    answer: 'Our templates are designed to cover major privacy regulations including GDPR (EU), CCPA/CPRA (California), PIPEDA (Canada), and LGPD (Brazil). However, generated documents are templates — we strongly recommend having a qualified attorney review your privacy policy before publishing.',
  },
  {
    question: 'What information do I need to generate a privacy policy?',
    answer: 'You\'ll need your company name, contact email, what data you collect (e.g., names, emails, payment info), how you use that data, whether you share it with third parties, and your primary jurisdiction. The questionnaire guides you through everything.',
  },
  {
    question: 'Can I customize the generated privacy policy?',
    answer: 'Absolutely. You can download the policy in Markdown, HTML, or PDF format and edit it to fit your specific needs. The generator creates a comprehensive starting point that you can tailor to your business.',
  },
  {
    question: 'Do I need a privacy policy for my website?',
    answer: 'Yes. If your website collects any personal data (including through cookies, analytics, or contact forms), you are legally required to have a privacy policy in most jurisdictions. GDPR, CCPA, and other regulations mandate clear disclosure of data practices.',
  },
  {
    question: 'How often should I update my privacy policy?',
    answer: 'You should update your privacy policy whenever you change your data collection or processing practices, add new third-party services, expand to new jurisdictions, or when relevant laws change. We recommend reviewing it at least annually.',
  },
  {
    question: 'What makes LegalKit different from other generators?',
    answer: 'LegalKit generates comprehensive, multi-jurisdiction policies that cover GDPR, CCPA, PIPEDA, and more — all in one document. We provide multiple export formats (Markdown, HTML, PDF), no account required, and our templates are regularly updated to reflect current regulations.',
  },
];

export default function FreePrivacyPolicyGeneratorPage() {
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
    name: 'LegalKit Privacy Policy Generator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Free privacy policy generator for websites, apps, and businesses. GDPR, CCPA, and PIPEDA compliant templates.',
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
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            100% Free — No Signup Required
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Free Privacy Policy<br />
            <span className="text-indigo-600">Generator</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Generate a professional, legally comprehensive privacy policy for your website or app in under 5 minutes. 
            Covers GDPR, CCPA, PIPEDA, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/generate"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors shadow-lg shadow-indigo-200 inline-flex items-center justify-center gap-2"
            >
              Generate My Privacy Policy <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-4">No account needed • Download instantly • Markdown, HTML & PDF</p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">What&apos;s Included in Your Privacy Policy</h2>
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">Every policy generated by LegalKit covers these essential sections</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Data Collection', desc: 'Clear disclosure of what personal data you collect and how you collect it.' },
              { title: 'Data Usage', desc: 'How collected data is used — from providing services to analytics and marketing.' },
              { title: 'Third-Party Sharing', desc: 'Transparent listing of all third parties who receive user data.' },
              { title: 'User Rights', desc: 'Access, deletion, correction, and portability rights under GDPR, CCPA, etc.' },
              { title: 'Cookie Disclosure', desc: 'Types of cookies used and how users can manage their preferences.' },
              { title: 'Data Security', desc: 'Your data protection measures and security practices.' },
              { title: 'Children\'s Privacy', desc: 'COPPA compliance section if your service may collect data from minors.' },
              { title: 'Contact Information', desc: 'How users can reach your privacy team with questions or requests.' },
              { title: 'Policy Updates', desc: 'How you notify users of changes to your privacy policy.' },
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

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How to Generate Your Privacy Policy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Tell Us About Your Business', desc: 'Answer a guided questionnaire about your company, data practices, and the jurisdictions you operate in.', icon: FileText },
              { step: '2', title: 'Generate Instantly', desc: 'Our engine creates a comprehensive, multi-section privacy policy customized to your specific inputs.', icon: Zap },
              { step: '3', title: 'Download & Publish', desc: 'Download your privacy policy in Markdown, HTML, or PDF format. Copy-paste it into your website.', icon: Download },
            ].map((item) => (
              <div key={item.step} className="text-center p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
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

      {/* Jurisdictions */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Multi-Jurisdiction Compliance</h2>
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">Generate privacy policies that cover the world&apos;s major privacy regulations</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { flag: '🇪🇺', name: 'GDPR', region: 'European Union' },
              { flag: '🇺🇸', name: 'CCPA / CPRA', region: 'California, USA' },
              { flag: '🇬🇧', name: 'UK GDPR', region: 'United Kingdom' },
              { flag: '🇨🇦', name: 'PIPEDA', region: 'Canada' },
              { flag: '🇧🇷', name: 'LGPD', region: 'Brazil' },
              { flag: '🇦🇺', name: 'Privacy Act', region: 'Australia' },
            ].map((reg) => (
              <div key={reg.name} className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 bg-gray-50">
                <span className="text-2xl">{reg.flag}</span>
                <div>
                  <span className="font-semibold text-gray-900">{reg.name}</span>
                  <p className="text-xs text-gray-500">{reg.region}</p>
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
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">See why teams choose LegalKit for their privacy policies</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-4 text-sm font-semibold text-gray-700 border-b">Feature</th>
                  <th className="p-4 text-sm font-semibold text-indigo-600 border-b bg-indigo-50">LegalKit</th>
                  <th className="p-4 text-sm font-semibold text-gray-700 border-b">Termly</th>
                  <th className="p-4 text-sm font-semibold text-gray-700 border-b">GetTerms</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Free tier', legalkit: '✅ 3 docs/mo', termly: '✅ Limited', getterms: '✅ Basic' },
                  { feature: 'No signup required', legalkit: '✅', termly: '❌', getterms: '❌' },
                  { feature: 'Multi-jurisdiction', legalkit: '✅ 6+ regions', termly: '✅', getterms: '⚠️ Limited' },
                  { feature: 'PDF export', legalkit: '✅ Free', termly: '💰 Paid', getterms: '💰 Paid' },
                  { feature: 'Markdown export', legalkit: '✅', termly: '❌', getterms: '❌' },
                  { feature: 'HTML export', legalkit: '✅', termly: '✅', getterms: '✅' },
                  { feature: 'Custom branding', legalkit: '✅ Pro', termly: '💰 Paid', getterms: '💰 Paid' },
                  { feature: 'Starting price', legalkit: '$0', termly: '$10/mo', getterms: '$5.99/mo' },
                ].map((row) => (
                  <tr key={row.feature} className="border-b border-gray-100 last:border-b-0">
                    <td className="p-4 text-sm text-gray-700 font-medium">{row.feature}</td>
                    <td className="p-4 text-sm text-center bg-indigo-50/50 font-medium">{row.legalkit}</td>
                    <td className="p-4 text-sm text-center text-gray-600">{row.termly}</td>
                    <td className="p-4 text-sm text-center text-gray-600">{row.getterms}</td>
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
            <HelpCircle className="w-8 h-8 inline-block text-indigo-600 mr-2 -mt-1" />
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
              { name: 'Terms of Service', href: '/free-terms-of-service-generator', desc: 'Protect your business' },
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Create Your Privacy Policy?</h2>
          <p className="text-indigo-100 mb-8 text-lg">
            It takes less than 5 minutes. No account required.
          </p>
          <Link
            href="/generate"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold transition-colors"
          >
            Generate My Privacy Policy — Free <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
