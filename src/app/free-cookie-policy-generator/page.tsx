import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Download, Zap, ArrowRight, HelpCircle, Shield, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Cookie Policy Generator — Create Your Cookie Policy in Minutes | LegalKit',
  description: 'Generate a free, GDPR-compliant cookie policy for your website. Covers essential, analytics, functional, and advertising cookies. No signup required.',
  keywords: ['free cookie policy generator', 'cookie policy template', 'GDPR cookie policy', 'cookie consent', 'cookie notice generator', 'ePrivacy cookie policy'],
  alternates: {
    canonical: '/free-cookie-policy-generator',
  },
  openGraph: {
    title: 'Free Cookie Policy Generator | LegalKit',
    description: 'Generate a GDPR-compliant cookie policy in minutes. Covers all cookie types. No signup needed.',
    type: 'website',
    images: ['/og-image.png'],
  },
};

const faqs = [
  {
    question: 'Is this cookie policy generator free?',
    answer: 'Yes! Generate up to 3 documents per month completely free with no signup. Our Pro plan ($12/mo) offers unlimited generation, PDF export, and custom branding.',
  },
  {
    question: 'Do I need a cookie policy for my website?',
    answer: 'If your website uses any cookies (including analytics like Google Analytics, session cookies, or advertising pixels), you need a cookie policy under GDPR, the ePrivacy Directive, and several other regulations. Even basic WordPress sites typically use cookies.',
  },
  {
    question: 'What\'s the difference between a cookie policy and a privacy policy?',
    answer: 'A privacy policy covers all personal data collection and processing. A cookie policy specifically addresses how your website uses cookies and similar tracking technologies. While your privacy policy should mention cookies, a dedicated cookie policy provides the detailed breakdown that GDPR and the ePrivacy Directive require.',
  },
  {
    question: 'What types of cookies does the generator cover?',
    answer: 'Our generator covers five categories: (1) Essential/Strictly Necessary cookies, (2) Analytics/Performance cookies, (3) Functional/Preference cookies, (4) Advertising/Targeting cookies, and (5) Social Media cookies. Each category includes explanations of purpose, duration, and third-party providers.',
  },
  {
    question: 'Do I also need a cookie consent banner?',
    answer: 'Yes, under GDPR and the ePrivacy Directive, you need to obtain user consent before placing non-essential cookies. A cookie policy explains your practices, while a cookie consent banner/popup is the mechanism for getting consent. They work together.',
  },
  {
    question: 'How do I implement cookies consent on my website?',
    answer: 'You\'ll need a cookie consent management tool (CMP) like Cookiebot, OneTrust, or a simple custom banner that: (1) blocks non-essential cookies until consent is given, (2) allows users to accept/reject cookie categories, (3) stores consent preferences, and (4) links to your cookie policy.',
  },
  {
    question: 'What cookies does Google Analytics set?',
    answer: 'Google Analytics (GA4) typically sets _ga (2 years), _ga_* (2 years), and _gid (24 hours) cookies. These are classified as Analytics/Performance cookies and require user consent under GDPR. Our generator includes these details when you select Google Analytics as a third-party service.',
  },
];

export default function FreeCookiePolicyGeneratorPage() {
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
    name: 'LegalKit Cookie Policy Generator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Free cookie policy generator for websites. GDPR and ePrivacy Directive compliant templates covering all cookie categories.',
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
      <section className="bg-gradient-to-br from-amber-50 via-white to-indigo-50 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🍪 100% Free — No Signup Required
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Free Cookie Policy<br />
            <span className="text-indigo-600">Generator</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Generate a GDPR-compliant cookie policy that explains exactly which cookies your website uses, 
            why it uses them, and how users can manage their preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/generate"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors shadow-lg shadow-indigo-200 inline-flex items-center justify-center gap-2"
            >
              Generate My Cookie Policy <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-4">No account needed • Download instantly • Markdown, HTML & PDF</p>
        </div>
      </section>

      {/* Cookie Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Cookie Categories Covered</h2>
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">Our generator creates detailed explanations for each type of cookie your site uses</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                emoji: '🔒',
                title: 'Essential Cookies',
                desc: 'Strictly necessary for the website to function. Login sessions, shopping carts, security tokens. Cannot be disabled.',
                examples: 'Session ID, CSRF tokens, auth cookies',
              },
              {
                emoji: '📊',
                title: 'Analytics Cookies',
                desc: 'Help understand how visitors interact with your website. Page views, bounce rates, traffic sources.',
                examples: 'Google Analytics (_ga, _gid), Mixpanel',
              },
              {
                emoji: '⚙️',
                title: 'Functional Cookies',
                desc: 'Remember user preferences like language, region, and display settings for a personalized experience.',
                examples: 'Language preference, theme selection',
              },
              {
                emoji: '🎯',
                title: 'Advertising Cookies',
                desc: 'Track browsing activity to deliver relevant ads. Used for retargeting and measuring ad effectiveness.',
                examples: 'Facebook Pixel, Google Ads, LinkedIn Insight',
              },
              {
                emoji: '💬',
                title: 'Social Media Cookies',
                desc: 'Enable social sharing and embedding. Allow content from social platforms to be displayed on your site.',
                examples: 'Twitter embed, Facebook Like, YouTube',
              },
              {
                emoji: '🧩',
                title: 'Third-Party Cookies',
                desc: 'Set by external services integrated into your site. Your policy lists each provider and their purpose.',
                examples: 'Stripe, Intercom, Hotjar, Sentry',
              },
            ].map((cat) => (
              <div key={cat.title} className="p-6 rounded-xl border border-gray-200 hover:border-indigo-200 hover:shadow-md transition-all">
                <span className="text-2xl mb-3 block">{cat.emoji}</span>
                <h3 className="font-bold text-gray-900 mb-2">{cat.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{cat.desc}</p>
                <p className="text-xs text-gray-400"><span className="font-medium">Examples:</span> {cat.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Generate Your Cookie Policy in 3 Steps</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Select Your Cookies', desc: 'Tell us which types of cookies your website uses — essential, analytics, functional, advertising, and social media.', icon: FileText },
              { step: '2', title: 'Add Your Details', desc: 'Provide your company info, jurisdiction, and any third-party services (Google Analytics, Stripe, etc.) that set cookies.', icon: Zap },
              { step: '3', title: 'Download & Deploy', desc: 'Get your cookie policy in Markdown, HTML, or PDF. Link it from your cookie consent banner and website footer.', icon: Download },
            ].map((item) => (
              <div key={item.step} className="text-center p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-amber-600" />
                </div>
                <div className="text-sm font-semibold text-indigo-600 mb-2">Step {item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Regulatory Compliance</h2>
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">Our cookie policies are designed to meet these key regulations</p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                flag: '🇪🇺',
                name: 'GDPR (EU)',
                desc: 'Requires explicit consent before setting non-essential cookies. Users must be able to withdraw consent easily.',
              },
              {
                flag: '🇪🇺',
                name: 'ePrivacy Directive',
                desc: 'The "Cookie Law" — requires clear information about cookies and prior consent for tracking cookies.',
              },
              {
                flag: '🇺🇸',
                name: 'CCPA / CPRA (California)',
                desc: 'Requires disclosure of tracking technologies and "Do Not Sell" opt-out for advertising cookies.',
              },
              {
                flag: '🇬🇧',
                name: 'UK PECR',
                desc: 'UK Privacy and Electronic Communications Regulations — similar to ePrivacy but UK-specific.',
              },
            ].map((reg) => (
              <div key={reg.name} className="flex gap-4 p-5 rounded-xl border border-gray-200 bg-gray-50">
                <span className="text-2xl flex-shrink-0">{reg.flag}</span>
                <div>
                  <span className="font-semibold text-gray-900">{reg.name}</span>
                  <p className="text-sm text-gray-600 mt-1">{reg.desc}</p>
                </div>
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

      {/* Related Tools */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Complete Your Legal Document Suite</h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Link
              href="/free-privacy-policy-generator"
              className="flex items-center gap-3 p-5 rounded-xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50 transition-colors"
            >
              <Shield className="w-6 h-6 text-indigo-600" />
              <div>
                <span className="font-semibold text-gray-900">Privacy Policy Generator</span>
                <p className="text-xs text-gray-500">GDPR & CCPA compliant</p>
              </div>
            </Link>
            <Link
              href="/free-terms-of-service-generator"
              className="flex items-center gap-3 p-5 rounded-xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50 transition-colors"
            >
              <Scale className="w-6 h-6 text-indigo-600" />
              <div>
                <span className="font-semibold text-gray-900">Terms of Service Generator</span>
                <p className="text-xs text-gray-500">Liability & IP protection</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get GDPR-Compliant in Minutes</h2>
          <p className="text-indigo-100 mb-8 text-lg">
            Generate a professional cookie policy that covers all your tracking technologies.
          </p>
          <Link
            href="/generate"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold transition-colors"
          >
            Generate My Cookie Policy — Free <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
