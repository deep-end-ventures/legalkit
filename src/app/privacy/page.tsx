import { DISCLAIMERS } from '@/lib/disclaimers';
import { AlertTriangle } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Disclaimer banner */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <div className="flex gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-amber-700 text-sm">{DISCLAIMERS.siteBanner}</p>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-gray-500 mb-8">Last updated: {new Date().toISOString().split('T')[0]}</p>

      <div className="prose prose-gray max-w-none">
        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">1. Introduction</h2>
        <p className="text-gray-700 mb-4">
          LegalKit, operated by Deep End Ventures (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect information when you use LegalKit.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">2. Information We Collect</h2>
        <p className="text-gray-700 mb-2">When you use LegalKit, we may collect:</p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li><strong>Questionnaire Data:</strong> Information you provide about your company (company name, website, email, etc.) for document generation</li>
          <li><strong>Usage Data:</strong> How you interact with our service (pages visited, features used)</li>
          <li><strong>Device Data:</strong> Browser type, IP address, device information</li>
          <li><strong>Local Storage:</strong> Generated documents stored in your browser&apos;s local storage</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">3. How We Use Information</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>To generate legal document templates based on your input</li>
          <li>To improve and optimize our service</li>
          <li>To respond to support requests</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">4. Data Storage</h2>
        <p className="text-gray-700 mb-4">
          Currently, LegalKit stores generated documents in your browser&apos;s local storage. This means your documents stay on your device and are not uploaded to our servers. If you clear your browser data, your stored documents will be deleted.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">5. Third-Party Services</h2>
        <p className="text-gray-700 mb-4">
          We may use third-party services for hosting (Vercel), analytics, and future payment processing. These services may collect information as described in their own privacy policies.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">6. Data Security</h2>
        <p className="text-gray-700 mb-4">
          We implement reasonable security measures to protect information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">7. Your Rights</h2>
        <p className="text-gray-700 mb-4">
          Since documents are stored locally in your browser, you have full control over your data. You can view, export, or delete your documents at any time through the Dashboard. For any data we hold on our servers, you may request access, correction, or deletion by contacting us.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">8. Children&apos;s Privacy</h2>
        <p className="text-gray-700 mb-4">
          LegalKit is not intended for use by individuals under 18. We do not knowingly collect information from children.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">9. Changes</h2>
        <p className="text-gray-700 mb-4">
          We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">10. Contact</h2>
        <p className="text-gray-700 mb-4">
          For privacy-related questions, contact us at: legal@deependventures.com
        </p>
      </div>
    </div>
  );
}
