import { LIABILITY_NOTICE, DISCLAIMERS } from '@/lib/disclaimers';
import { AlertTriangle } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Disclaimer banner */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <div className="flex gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-amber-700 text-sm">{DISCLAIMERS.siteBanner}</p>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
      <p className="text-gray-500 mb-8">Last updated: {new Date().toISOString().split('T')[0]}</p>

      <div className="prose prose-gray max-w-none">
        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">1. Acceptance of Terms</h2>
        <p className="text-gray-700 mb-4">
          By accessing or using LegalKit (&ldquo;Service&rdquo;), operated by Deep End Ventures (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), you agree to be bound by these Terms of Service. If you do not agree, do not use the Service.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">2. Nature of Service</h2>
        <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-4">
          <p className="text-red-800 font-semibold text-sm mb-2">⚠️ CRITICAL NOTICE</p>
          <p className="text-red-700 text-sm whitespace-pre-line">{LIABILITY_NOTICE}</p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">3. Service Description</h2>
        <p className="text-gray-700 mb-4">
          LegalKit is an automated document template generator that creates legal document templates based on user input. The Service uses template-based generation with variable substitution to produce documents including privacy policies, terms of service, and cookie policies.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">4. No Legal Advice</h2>
        <p className="text-gray-700 mb-4">
          LegalKit does NOT provide legal advice. The documents generated are templates only. We are not a law firm, we do not practice law, and we do not provide legal counsel. The use of LegalKit does not create an attorney-client relationship. You should always consult with a qualified attorney licensed in your jurisdiction before using any generated document for your business.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">5. User Responsibilities</h2>
        <p className="text-gray-700 mb-2">You are responsible for:</p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>Providing accurate information in the questionnaire</li>
          <li>Reviewing all generated documents before use</li>
          <li>Having generated documents reviewed by a qualified attorney</li>
          <li>Ensuring documents comply with applicable laws in your jurisdiction</li>
          <li>Customizing documents to meet your specific business needs</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">6. Limitation of Liability</h2>
        <p className="text-gray-700 mb-4 uppercase font-medium text-sm">
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, LEGALKIT, DEEP END VENTURES, AND THEIR OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM OR RELATED TO YOUR USE OF THE SERVICE OR ANY GENERATED DOCUMENTS, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, GOODWILL, DATA, OR OTHER INTANGIBLE LOSSES, REGARDLESS OF WHETHER WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
        </p>
        <p className="text-gray-700 mb-4 uppercase font-medium text-sm">
          OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR TEN DOLLARS ($10), WHICHEVER IS GREATER.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">7. Disclaimer of Warranties</h2>
        <p className="text-gray-700 mb-4 uppercase font-medium text-sm">
          THE SERVICE AND ALL GENERATED DOCUMENTS ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, COMPLETENESS, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT GENERATED DOCUMENTS WILL MEET YOUR REQUIREMENTS, BE LEGALLY SUFFICIENT, OR COMPLY WITH APPLICABLE LAWS.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">8. Indemnification</h2>
        <p className="text-gray-700 mb-4">
          You agree to indemnify, defend, and hold harmless LegalKit, Deep End Ventures, and their affiliates from any claims, damages, losses, or expenses (including attorneys&apos; fees) arising from your use of the Service, any generated documents, or your violation of these Terms.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">9. Intellectual Property</h2>
        <p className="text-gray-700 mb-4">
          You retain the right to use documents generated for your business. The LegalKit platform, brand, templates, and code remain the property of Deep End Ventures. You may not resell, redistribute, or white-label generated documents as a competing service.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">10. Pricing and Payment</h2>
        <p className="text-gray-700 mb-4">
          LegalKit offers a free tier (one document generation) and paid plans. Pricing is subject to change with notice. Paid features will be clearly identified before purchase.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">11. Termination</h2>
        <p className="text-gray-700 mb-4">
          We may terminate or suspend your access to the Service at any time, without notice, for any reason. Upon termination, your right to use the Service ceases immediately.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">12. Governing Law</h2>
        <p className="text-gray-700 mb-4">
          These Terms shall be governed by the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">13. Contact</h2>
        <p className="text-gray-700 mb-4">
          For questions about these Terms, contact us at: legal@deependventures.com
        </p>
      </div>
    </div>
  );
}
