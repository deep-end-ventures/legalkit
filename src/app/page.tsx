import Link from 'next/link';
import { Scale, FileText, Download, Shield, Zap, Globe, Check } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Scale className="w-4 h-4" />
            Legal documents made simple
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Generate Professional<br />
            <span className="text-indigo-600">Legal Documents</span><br />
            in Minutes
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Privacy policies, terms of service, cookie policies — customized for your business.
            Answer a few questions and download production-ready documents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/generate"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors shadow-lg shadow-indigo-200"
            >
              Generate Free Document →
            </Link>
            <Link
              href="#features"
              className="bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold transition-colors border border-gray-200"
            >
              Learn More
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-4">No signup required for your first document</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">Three simple steps to professional legal documents</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Answer Questions',
                desc: 'Fill out our guided questionnaire about your business, data practices, and jurisdiction.',
                icon: FileText,
              },
              {
                step: '2',
                title: 'Generate Documents',
                desc: 'Our engine creates customized privacy policies, terms of service, and cookie policies.',
                icon: Zap,
              },
              {
                step: '3',
                title: 'Download & Deploy',
                desc: 'Download in HTML, Markdown, or PDF format. Copy-paste into your website.',
                icon: Download,
              },
            ].map((item) => (
              <div key={item.step} className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100">
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

      {/* Features */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Everything You Need</h2>
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">Professional legal document generation with all the right features</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: FileText, title: 'Privacy Policy', desc: 'Comprehensive privacy policies covering data collection, usage, sharing, and user rights.' },
              { icon: Scale, title: 'Terms of Service', desc: 'Detailed terms covering liability, IP, user accounts, payments, and dispute resolution.' },
              { icon: Shield, title: 'Cookie Policy', desc: 'Cookie policies with detailed breakdowns of cookie types and management options.' },
              { icon: Globe, title: 'Multi-Jurisdiction', desc: 'Support for GDPR, CCPA/CPRA, PIPEDA, LGPD, and more international regulations.' },
              { icon: Download, title: 'Multiple Formats', desc: 'Download as HTML, Markdown, or PDF. Ready to embed in your website.' },
              { icon: Zap, title: 'Instant Generation', desc: 'Documents generated instantly. No waiting, no manual review delays.' },
            ].map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-indigo-200 hover:shadow-md transition-all">
                <feature.icon className="w-8 h-8 text-indigo-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Simple Pricing</h2>
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">Start free. Upgrade when you need more.</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Free */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-gray-900">$0</span>
                <span className="text-gray-500">/forever</span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  '3 documents per month',
                  'All document types',
                  'Download as Markdown & HTML',
                  'Standard templates',
                  'LegalKit watermark',
                ].map(f => (
                  <li key={f} className="flex items-center gap-2 text-gray-700 text-sm">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/generate" className="block w-full text-center bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg font-medium transition-colors">
                Get Started Free
              </Link>
            </div>

            {/* Pro */}
            <div className="bg-indigo-600 rounded-2xl p-8 border border-indigo-500 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full">
                RECOMMENDED
              </div>
              <h3 className="text-xl font-bold mb-2">Pro</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold">$12</span>
                <span className="text-indigo-200">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  'Unlimited documents',
                  'All document types',
                  'Download as Markdown, HTML & PDF',
                  'Custom branding (no watermark)',
                  'Bulk export',
                  'Priority templates',
                  'Document dashboard & versioning',
                ].map(f => (
                  <li key={f} className="flex items-center gap-2 text-indigo-100 text-sm">
                    <Check className="w-4 h-4 text-indigo-300 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/pricing" className="block w-full text-center bg-white text-indigo-600 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Upgrade to Pro — $12/mo
              </Link>
              <p className="mt-2 text-center text-xs text-indigo-300">Pay with USDC on Base</p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Tools */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Free Legal Document Tools</h2>
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">Generate any of these essential legal documents — completely free</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/free-privacy-policy-generator"
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-indigo-200 hover:shadow-md transition-all group"
            >
              <Shield className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">Privacy Policy Generator</h3>
              <p className="text-gray-600 text-sm mb-3">GDPR, CCPA, PIPEDA compliant privacy policies for any business type.</p>
              <span className="text-sm text-indigo-600 font-medium">Generate free →</span>
            </Link>
            <Link
              href="/free-terms-of-service-generator"
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-indigo-200 hover:shadow-md transition-all group"
            >
              <Scale className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">Terms of Service Generator</h3>
              <p className="text-gray-600 text-sm mb-3">Cover liability, IP, user accounts, payments, and dispute resolution.</p>
              <span className="text-sm text-indigo-600 font-medium">Generate free →</span>
            </Link>
            <Link
              href="/free-cookie-policy-generator"
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-indigo-200 hover:shadow-md transition-all group"
            >
              <Globe className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">Cookie Policy Generator</h3>
              <p className="text-gray-600 text-sm mb-3">ePrivacy Directive compliant cookie policies with detailed breakdowns.</p>
              <span className="text-sm text-indigo-600 font-medium">Generate free →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Generate Your Legal Documents?</h2>
          <p className="text-indigo-100 mb-8 text-lg">
            Join thousands of businesses that trust LegalKit for their legal document needs.
          </p>
          <Link
            href="/generate"
            className="inline-block bg-white hover:bg-gray-100 text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold transition-colors"
          >
            Generate Your First Document — Free →
          </Link>
        </div>
      </section>
    </div>
  );
}
