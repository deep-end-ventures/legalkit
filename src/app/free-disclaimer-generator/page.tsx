import { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, FileText, Download, Check, Zap, ArrowRight, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Disclaimer Generator — Create a Website Disclaimer in Minutes | LegalKit',
  description: 'Generate a free, professional disclaimer for your website, blog, or business. Covers liability, external links, testimonials, errors & omissions. No signup required.',
  keywords: ['free disclaimer generator', 'website disclaimer template', 'disclaimer generator', 'liability disclaimer', 'blog disclaimer', 'business disclaimer template'],
  alternates: {
    canonical: '/free-disclaimer-generator',
  },
  openGraph: {
    title: 'Free Disclaimer Generator | LegalKit',
    description: 'Generate a professional website disclaimer in minutes. Covers liability, external links, and more. No signup needed.',
    type: 'website',
    images: ['/og-image.png'],
  },
};

const faqs = [
  {
    question: 'Is this disclaimer generator really free?',
    answer: 'Yes! You can generate disclaimers completely free with no signup required. Choose which sections to include — general liability, external links, testimonials, errors & omissions, and more.',
  },
  {
    question: 'Do I need a disclaimer on my website?',
    answer: 'While not always legally mandatory, a disclaimer is strongly recommended for any website that provides information, advice, opinions, or links to external sites. It helps limit your liability and sets clear expectations for visitors. Professional service providers, bloggers, affiliate marketers, and e-commerce sites especially benefit from having one.',
  },
  {
    question: 'What types of disclaimers can I generate?',
    answer: 'LegalKit generates disclaimers with customizable sections including: General Disclaimer, No Professional Advice, No Guarantees, External Links, Testimonials, Errors & Omissions, and Fair Use (Copyright). You can pick exactly the sections relevant to your business.',
  },
  {
    question: 'What\'s the difference between a disclaimer and terms of service?',
    answer: 'A Terms of Service (ToS) is a contract between you and your users that governs how they can use your service. A Disclaimer is a statement that limits your liability and sets expectations about the accuracy and reliability of your content. Most websites benefit from having both.',
  },
  {
    question: 'Should I have a separate disclaimer or include it in my Terms of Service?',
    answer: 'It depends on your needs. A standalone disclaimer is more visible and easier for visitors to find. Many businesses include a brief disclaimer in their Terms of Service AND have a separate, more detailed disclaimer page. LegalKit lets you generate both.',
  },
  {
    question: 'Can I customize which sections are included?',
    answer: 'Absolutely. Our generator lets you pick from 6 disclaimer sections: No Guarantees, No Professional Advice, External Links, Testimonials, Errors & Omissions, and Fair Use. Only include what\'s relevant to your site.',
  },
  {
    question: 'Is a disclaimer legally enforceable?',
    answer: 'Disclaimers can provide a degree of legal protection, but their enforceability varies by jurisdiction and circumstance. They are generally more effective when they are clearly visible, written in plain language, and relevant to the content being disclaimed. A disclaimer cannot override mandatory consumer protection laws. Consult a qualified attorney for specific legal questions.',
  },
];

export default function FreeDisclaimerGeneratorPage() {
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
    name: 'LegalKit Disclaimer Generator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Free website disclaimer generator. Covers liability, external links, testimonials, errors & omissions, and fair use.',
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
      <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            100% Free — No Signup Required
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Free Website<br />
            <span className="text-amber-600">Disclaimer Generator</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Generate a professional disclaimer for your website, blog, or online business. 
            Limit your liability and set clear expectations for your visitors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/generate"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors shadow-lg shadow-amber-200 inline-flex items-center justify-center gap-2"
            >
              Generate My Disclaimer <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-4">No account needed • Download instantly • Markdown, HTML & PDF</p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Customizable Disclaimer Sections</h2>
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">Pick the sections that apply to your website — only include what you need</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'General Disclaimer', desc: 'Broad liability limitation covering accuracy and completeness of information on your site.' },
              { title: 'No Professional Advice', desc: 'Clarify that your content is not a substitute for legal, financial, medical, or other professional advice.' },
              { title: 'No Guarantees', desc: 'Disclaim warranties about results, uptime, accuracy, and the reliability of your services.' },
              { title: 'External Links', desc: 'Limit liability for third-party websites linked from your site. You don\'t control their content.' },
              { title: 'Testimonials', desc: 'Clarify that testimonials reflect individual experiences and results may vary.' },
              { title: 'Errors & Omissions', desc: 'Protect against liability for mistakes, inaccuracies, or missing information in your content.' },
              { title: 'Fair Use (Copyright)', desc: 'Cover use of copyrighted material under fair use provisions (Section 107, US Copyright Law).' },
              { title: 'Limitation of Liability', desc: 'Cap your maximum liability for damages arising from use of your website or services.' },
              { title: 'Indemnification', desc: 'Require users to indemnify you against claims arising from their use of your site.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 p-4">
                <Check className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How to Generate Your Disclaimer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Tell Us About Your Site', desc: 'Enter your company info and choose which disclaimer sections apply to your website or business.', icon: FileText },
              { step: '2', title: 'Generate Instantly', desc: 'Our engine creates a comprehensive, multi-section disclaimer customized to your specific needs.', icon: Zap },
              { step: '3', title: 'Download & Publish', desc: 'Download your disclaimer in Markdown, HTML, or PDF format. Add it to your website footer or dedicated page.', icon: Download },
            ].map((item) => (
              <div key={item.step} className="text-center p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-amber-600" />
                </div>
                <div className="text-sm font-semibold text-amber-600 mb-2">Step {item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Needs This */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Who Needs a Disclaimer?</h2>
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">If you publish content online, a disclaimer helps protect you</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { icon: '📝', name: 'Bloggers', desc: 'Opinions & advice content' },
              { icon: '💼', name: 'Consultants', desc: 'Professional services' },
              { icon: '🏥', name: 'Health & Wellness', desc: 'Medical information' },
              { icon: '💰', name: 'Finance & Investing', desc: 'Financial information' },
              { icon: '🔗', name: 'Affiliate Marketers', desc: 'Product recommendations' },
              { icon: '🎓', name: 'Educators', desc: 'Courses & training' },
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
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">See why businesses choose LegalKit for their disclaimers</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-4 text-sm font-semibold text-gray-700 border-b">Feature</th>
                  <th className="p-4 text-sm font-semibold text-amber-600 border-b bg-amber-50">LegalKit</th>
                  <th className="p-4 text-sm font-semibold text-gray-700 border-b">Termly</th>
                  <th className="p-4 text-sm font-semibold text-gray-700 border-b">TermsFeed</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Free tier', legalkit: '✅ Unlimited', termly: '✅ Limited', tf: '✅ Basic' },
                  { feature: 'No signup required', legalkit: '✅', termly: '❌', tf: '❌' },
                  { feature: 'Customizable sections', legalkit: '✅ 6 sections', termly: '⚠️ Limited', tf: '✅' },
                  { feature: 'Testimonials section', legalkit: '✅', termly: '❌', tf: '✅' },
                  { feature: 'Fair use section', legalkit: '✅', termly: '❌', tf: '❌' },
                  { feature: 'PDF export', legalkit: '✅ Free', termly: '💰 Paid', tf: '💰 Paid' },
                  { feature: 'Markdown export', legalkit: '✅', termly: '❌', tf: '❌' },
                  { feature: 'Starting price', legalkit: '$0', termly: '$10/mo', tf: '$9/mo' },
                ].map((row) => (
                  <tr key={row.feature} className="border-b border-gray-100 last:border-b-0">
                    <td className="p-4 text-sm text-gray-700 font-medium">{row.feature}</td>
                    <td className="p-4 text-sm text-center bg-amber-50/50 font-medium">{row.legalkit}</td>
                    <td className="p-4 text-sm text-center text-gray-600">{row.termly}</td>
                    <td className="p-4 text-sm text-center text-gray-600">{row.tf}</td>
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
            <HelpCircle className="w-8 h-8 inline-block text-amber-600 mr-2 -mt-1" />
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
              { name: 'Refund Policy', href: '/free-refund-policy-generator', desc: 'Returns & refunds' },
            ].map((tool) => (
              <Link key={tool.name} href={tool.href} className="p-4 rounded-xl border border-gray-200 bg-white hover:border-amber-300 hover:shadow-sm transition-all">
                <h3 className="font-semibold text-gray-900 mb-1">{tool.name}</h3>
                <p className="text-xs text-gray-500">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Create Your Disclaimer?</h2>
          <p className="text-amber-100 mb-8 text-lg">
            It takes less than 5 minutes. No account required.
          </p>
          <Link
            href="/generate"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-amber-600 px-8 py-4 rounded-xl text-lg font-semibold transition-colors"
          >
            Generate My Disclaimer — Free <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
