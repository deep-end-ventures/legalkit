'use client';

import { useState } from 'react';
import { QuestionnaireData, DATA_TYPES, DATA_USAGE, THIRD_PARTIES, COOKIE_TYPES, JURISDICTIONS, COMPANY_TYPES, GeneratedDocument } from '@/lib/types';
import { generateDocuments } from '@/templates';
import { DISCLAIMERS } from '@/lib/disclaimers';
import { ArrowLeft, ArrowRight, FileText, Download, Copy, Check, AlertTriangle, Scale, Loader2 } from 'lucide-react';
import { downloadAsPdf } from '@/lib/pdf-export';

type Step = 'company' | 'data' | 'jurisdiction' | 'cookies' | 'documents' | 'review' | 'results';

const STEPS: { key: Step; label: string }[] = [
  { key: 'company', label: 'Company Info' },
  { key: 'data', label: 'Data Collection' },
  { key: 'jurisdiction', label: 'Jurisdiction' },
  { key: 'cookies', label: 'Cookies' },
  { key: 'documents', label: 'Documents' },
  { key: 'review', label: 'Review' },
];

const DEFAULT_DATA: QuestionnaireData = {
  companyName: '',
  companyWebsite: '',
  companyEmail: '',
  companyAddress: '',
  companyType: 'saas',
  dataCollected: [],
  dataUsage: [],
  thirdPartySharing: false,
  thirdParties: [],
  jurisdiction: 'United States',
  gdprApplicable: false,
  ccpaApplicable: false,
  childrenData: false,
  usesCookies: true,
  cookieTypes: [],
  documents: ['privacy_policy', 'terms_of_service'],
  hasUserAccounts: true,
  acceptsPayments: false,
  hasUserContent: false,
  hasSubscription: false,
  effectiveDate: new Date().toISOString().split('T')[0],
  refundWindow: 30,
  refundMethod: 'original_payment',
  digitalGoods: false,
  subscriptionRefunds: false,
  disclaimerTypes: ['general', 'no_guarantees'],
};

export default function GeneratePage() {
  const [step, setStep] = useState<Step>('company');
  const [data, setData] = useState<QuestionnaireData>(DEFAULT_DATA);
  const [results, setResults] = useState<GeneratedDocument[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [agreedToDisclaimer, setAgreedToDisclaimer] = useState(false);
  const [pdfLoading, setPdfLoading] = useState<string | null>(null);

  const currentStepIndex = STEPS.findIndex(s => s.key === step);

  const updateData = (updates: Partial<QuestionnaireData>) => {
    setData(prev => ({ ...prev, ...updates }));
  };

  const toggleArray = (field: keyof QuestionnaireData, value: string) => {
    const arr = data[field] as string[];
    if (arr.includes(value)) {
      updateData({ [field]: arr.filter(v => v !== value) });
    } else {
      updateData({ [field]: [...arr, value] });
    }
  };

  const handleGenerate = () => {
    const docs = generateDocuments(data);
    setResults(docs);
    // Save to localStorage for dashboard
    const existing = JSON.parse(localStorage.getItem('legalkit_documents') || '[]');
    localStorage.setItem('legalkit_documents', JSON.stringify([...docs, ...existing]));
    setStep('results');
  };

  const handleCopy = (content: string, id: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handlePdfDownload = async (doc: GeneratedDocument) => {
    setPdfLoading(doc.id);
    try {
      await downloadAsPdf(doc);
    } catch (err) {
      console.error('PDF generation failed:', err);
    } finally {
      setPdfLoading(null);
    }
  };

  const handleDownload = (doc: GeneratedDocument, format: 'md' | 'html') => {
    const content = format === 'md' ? doc.markdownContent : doc.htmlContent;
    const mimeType = format === 'md' ? 'text/markdown' : 'text/html';
    const ext = format;
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${doc.type}-${doc.companyName.toLowerCase().replace(/\s+/g, '-')}.${ext}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const canProceed = () => {
    switch (step) {
      case 'company': return data.companyName && data.companyEmail;
      case 'data': return data.dataCollected.length > 0 && data.dataUsage.length > 0;
      case 'jurisdiction': return data.jurisdiction;
      case 'cookies': return true;
      case 'documents': return data.documents.length > 0;
      case 'review': return agreedToDisclaimer;
      default: return true;
    }
  };

  const nextStep = () => {
    if (step === 'review') {
      handleGenerate();
      return;
    }
    const idx = STEPS.findIndex(s => s.key === step);
    if (idx < STEPS.length - 1) setStep(STEPS[idx + 1].key);
  };

  const prevStep = () => {
    const idx = STEPS.findIndex(s => s.key === step);
    if (idx > 0) setStep(STEPS[idx - 1].key);
  };

  if (step === 'results') {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Documents Generated!</h1>
          <p className="text-gray-600">Your legal documents for {data.companyName} are ready.</p>
        </div>

        {/* Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
          <div className="flex gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 text-sm mb-1">Important Disclaimer</p>
              <p className="text-amber-700 text-sm">{DISCLAIMERS.documentHeader}</p>
            </div>
          </div>
        </div>

        {/* Documents */}
        <div className="space-y-6">
          {results.map(doc => (
            <div key={doc.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-indigo-600" />
                    <h2 className="text-lg font-bold text-gray-900">{doc.title}</h2>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleCopy(doc.markdownContent, doc.id)}
                      className="flex items-center gap-1 px-3 py-1.5 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      {copiedId === doc.id ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      {copiedId === doc.id ? 'Copied!' : 'Copy'}
                    </button>
                    <button
                      onClick={() => handleDownload(doc, 'html')}
                      className="flex items-center gap-1 px-3 py-1.5 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Download className="w-3 h-3" />
                      HTML
                    </button>
                    <button
                      onClick={() => handleDownload(doc, 'md')}
                      className="flex items-center gap-1 px-3 py-1.5 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Download className="w-3 h-3" />
                      Markdown
                    </button>
                    <button
                      onClick={() => handlePdfDownload(doc)}
                      disabled={pdfLoading === doc.id}
                      className="flex items-center gap-1 px-4 py-1.5 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-60 transition-colors font-medium"
                    >
                      {pdfLoading === doc.id ? (
                        <Loader2 className="w-3 h-3 animate-spin" />
                      ) : (
                        <Download className="w-3 h-3" />
                      )}
                      {pdfLoading === doc.id ? 'Generating...' : 'PDF'}
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6 max-h-96 overflow-y-auto">
                <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono leading-relaxed">{doc.markdownContent}</pre>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => {
              setStep('company');
              setResults([]);
              setAgreedToDisclaimer(false);
            }}
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            ← Generate Another Document
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Generate Legal Documents</h1>
        <p className="text-gray-600">Answer a few questions about your business</p>
      </div>

      {/* Progress */}
      <div className="flex items-center justify-center gap-2 mb-10">
        {STEPS.map((s, i) => (
          <div key={s.key} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                i < currentStepIndex
                  ? 'bg-indigo-600 text-white'
                  : i === currentStepIndex
                  ? 'bg-indigo-600 text-white ring-4 ring-indigo-100'
                  : 'bg-gray-200 text-gray-500'
              }`}
            >
              {i < currentStepIndex ? <Check className="w-4 h-4" /> : i + 1}
            </div>
            {i < STEPS.length - 1 && (
              <div className={`w-8 h-0.5 ${i < currentStepIndex ? 'bg-indigo-600' : 'bg-gray-200'}`} />
            )}
          </div>
        ))}
      </div>

      {/* Step label */}
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        {STEPS[currentStepIndex]?.label}
      </h2>

      {/* Form Steps */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        {step === 'company' && (
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
              <input
                type="text"
                value={data.companyName}
                onChange={e => updateData({ companyName: e.target.value })}
                placeholder="Acme Inc."
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company Website</label>
              <input
                type="url"
                value={data.companyWebsite}
                onChange={e => updateData({ companyWebsite: e.target.value })}
                placeholder="https://acme.com"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email *</label>
              <input
                type="email"
                value={data.companyEmail}
                onChange={e => updateData({ companyEmail: e.target.value })}
                placeholder="legal@acme.com"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company Address</label>
              <input
                type="text"
                value={data.companyAddress}
                onChange={e => updateData({ companyAddress: e.target.value })}
                placeholder="123 Main St, City, State, ZIP"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company Type</label>
              <select
                value={data.companyType}
                onChange={e => updateData({ companyType: e.target.value as QuestionnaireData['companyType'] })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-white"
              >
                {COMPANY_TYPES.map(t => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input type="checkbox" checked={data.hasUserAccounts} onChange={e => updateData({ hasUserAccounts: e.target.checked })} className="rounded text-indigo-600" />
                Users create accounts
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input type="checkbox" checked={data.acceptsPayments} onChange={e => updateData({ acceptsPayments: e.target.checked })} className="rounded text-indigo-600" />
                Accepts payments
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input type="checkbox" checked={data.hasUserContent} onChange={e => updateData({ hasUserContent: e.target.checked })} className="rounded text-indigo-600" />
                User-generated content
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input type="checkbox" checked={data.hasSubscription} onChange={e => updateData({ hasSubscription: e.target.checked })} className="rounded text-indigo-600" />
                Subscription model
              </label>
            </div>
          </div>
        )}

        {step === 'data' && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">What data do you collect? *</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {DATA_TYPES.map(dt => (
                  <label key={dt} className="flex items-center gap-2 text-sm text-gray-700 p-2 rounded hover:bg-gray-50">
                    <input
                      type="checkbox"
                      checked={data.dataCollected.includes(dt)}
                      onChange={() => toggleArray('dataCollected', dt)}
                      className="rounded text-indigo-600"
                    />
                    {dt}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">How do you use the data? *</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {DATA_USAGE.map(du => (
                  <label key={du} className="flex items-center gap-2 text-sm text-gray-700 p-2 rounded hover:bg-gray-50">
                    <input
                      type="checkbox"
                      checked={data.dataUsage.includes(du)}
                      onChange={() => toggleArray('dataUsage', du)}
                      className="rounded text-indigo-600"
                    />
                    {du}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                <input
                  type="checkbox"
                  checked={data.thirdPartySharing}
                  onChange={e => updateData({ thirdPartySharing: e.target.checked })}
                  className="rounded text-indigo-600"
                />
                Do you share data with third parties?
              </label>
              {data.thirdPartySharing && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-6">
                  {THIRD_PARTIES.map(tp => (
                    <label key={tp} className="flex items-center gap-2 text-sm text-gray-700 p-2 rounded hover:bg-gray-50">
                      <input
                        type="checkbox"
                        checked={data.thirdParties.includes(tp)}
                        onChange={() => toggleArray('thirdParties', tp)}
                        className="rounded text-indigo-600"
                      />
                      {tp}
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {step === 'jurisdiction' && (
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Primary Jurisdiction</label>
              <select
                value={data.jurisdiction}
                onChange={e => updateData({ jurisdiction: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-white"
              >
                {JURISDICTIONS.map(j => (
                  <option key={j} value={j}>{j}</option>
                ))}
              </select>
            </div>
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input type="checkbox" checked={data.gdprApplicable} onChange={e => updateData({ gdprApplicable: e.target.checked })} className="rounded text-indigo-600" />
                GDPR applicable (EU users or processing)
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input type="checkbox" checked={data.ccpaApplicable} onChange={e => updateData({ ccpaApplicable: e.target.checked })} className="rounded text-indigo-600" />
                CCPA/CPRA applicable (California residents)
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input type="checkbox" checked={data.childrenData} onChange={e => updateData({ childrenData: e.target.checked })} className="rounded text-indigo-600" />
                May collect data from children under 13
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Effective Date</label>
              <input
                type="date"
                value={data.effectiveDate}
                onChange={e => updateData({ effectiveDate: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              />
            </div>
          </div>
        )}

        {step === 'cookies' && (
          <div className="space-y-5">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <input
                type="checkbox"
                checked={data.usesCookies}
                onChange={e => updateData({ usesCookies: e.target.checked })}
                className="rounded text-indigo-600"
              />
              Does your website/app use cookies?
            </label>
            {data.usesCookies && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Cookie types used:</label>
                <div className="space-y-2">
                  {COOKIE_TYPES.map(ct => (
                    <label key={ct} className="flex items-center gap-2 text-sm text-gray-700 p-2 rounded hover:bg-gray-50">
                      <input
                        type="checkbox"
                        checked={data.cookieTypes.includes(ct)}
                        onChange={() => toggleArray('cookieTypes', ct)}
                        className="rounded text-indigo-600"
                      />
                      {ct}
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {step === 'documents' && (
          <div className="space-y-4">
            <p className="text-sm text-gray-600 mb-4">Select the documents you want to generate:</p>
            {[
              { value: 'privacy_policy' as const, label: 'Privacy Policy', desc: 'Required by law in most jurisdictions. Explains how you collect, use, and protect user data.' },
              { value: 'terms_of_service' as const, label: 'Terms of Service', desc: 'Defines the rules and regulations for using your service. Limits your liability.' },
              { value: 'cookie_policy' as const, label: 'Cookie Policy', desc: 'Required by GDPR/ePrivacy. Explains your use of cookies and tracking technologies.' },
              { value: 'refund_policy' as const, label: 'Refund Policy', desc: 'Sets clear expectations for returns and refunds. Essential for e-commerce, SaaS, and subscription businesses.' },
              { value: 'disclaimer' as const, label: 'Disclaimer', desc: 'Limits your liability and sets expectations. Covers external links, testimonials, and accuracy of information.' },
            ].map(doc => (
              <label key={doc.value} className={`flex items-start gap-3 p-4 rounded-xl border transition-colors cursor-pointer ${
                data.documents.includes(doc.value) ? 'border-indigo-300 bg-indigo-50' : 'border-gray-200 hover:border-gray-300'
              }`}>
                <input
                  type="checkbox"
                  checked={data.documents.includes(doc.value)}
                  onChange={() => toggleArray('documents', doc.value)}
                  className="rounded text-indigo-600 mt-0.5"
                />
                <div>
                  <span className="font-medium text-gray-900">{doc.label}</span>
                  <p className="text-sm text-gray-500 mt-0.5">{doc.desc}</p>
                </div>
              </label>
            ))}

            {/* Refund Policy Options */}
            {data.documents.includes('refund_policy') && (
              <div className="mt-6 p-4 rounded-xl border border-indigo-200 bg-indigo-50/50 space-y-4">
                <h4 className="font-medium text-gray-900 text-sm">Refund Policy Settings</h4>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Refund window (days)</label>
                  <select
                    value={data.refundWindow}
                    onChange={e => updateData({ refundWindow: Number(e.target.value) })}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                  >
                    <option value={7}>7 days</option>
                    <option value={14}>14 days</option>
                    <option value={30}>30 days</option>
                    <option value={60}>60 days</option>
                    <option value={90}>90 days</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Refund method</label>
                  <select
                    value={data.refundMethod}
                    onChange={e => updateData({ refundMethod: e.target.value as 'original_payment' | 'store_credit' | 'both' })}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                  >
                    <option value="original_payment">Original payment method</option>
                    <option value="store_credit">Store credit only</option>
                    <option value="both">Both (customer&apos;s choice)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={data.digitalGoods}
                      onChange={e => updateData({ digitalGoods: e.target.checked })}
                      className="rounded text-indigo-600"
                    />
                    We sell digital goods / downloads
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={data.subscriptionRefunds}
                      onChange={e => updateData({ subscriptionRefunds: e.target.checked })}
                      className="rounded text-indigo-600"
                    />
                    We offer subscriptions
                  </label>
                </div>
              </div>
            )}

            {/* Disclaimer Options */}
            {data.documents.includes('disclaimer') && (
              <div className="mt-6 p-4 rounded-xl border border-indigo-200 bg-indigo-50/50 space-y-3">
                <h4 className="font-medium text-gray-900 text-sm">Disclaimer Sections</h4>
                <p className="text-xs text-gray-500">Select which sections to include:</p>
                {[
                  { value: 'no_guarantees', label: 'No Guarantees' },
                  { value: 'professional_advice', label: 'No Professional Advice' },
                  { value: 'external_links', label: 'External Links' },
                  { value: 'testimonials', label: 'Testimonials' },
                  { value: 'errors_omissions', label: 'Errors & Omissions' },
                  { value: 'fair_use', label: 'Fair Use (Copyright)' },
                ].map(opt => (
                  <label key={opt.value} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={(data.disclaimerTypes || []).includes(opt.value)}
                      onChange={() => {
                        const current = data.disclaimerTypes || [];
                        const updated = current.includes(opt.value)
                          ? current.filter(v => v !== opt.value)
                          : [...current, opt.value];
                        updateData({ disclaimerTypes: updated });
                      }}
                      className="rounded text-indigo-600"
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            )}
          </div>
        )}

        {step === 'review' && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Company</span>
                <p className="font-medium text-gray-900">{data.companyName}</p>
              </div>
              <div>
                <span className="text-gray-500">Type</span>
                <p className="font-medium text-gray-900">{COMPANY_TYPES.find(t => t.value === data.companyType)?.label}</p>
              </div>
              <div>
                <span className="text-gray-500">Email</span>
                <p className="font-medium text-gray-900">{data.companyEmail}</p>
              </div>
              <div>
                <span className="text-gray-500">Jurisdiction</span>
                <p className="font-medium text-gray-900">{data.jurisdiction}</p>
              </div>
              <div>
                <span className="text-gray-500">Data types</span>
                <p className="font-medium text-gray-900">{data.dataCollected.length} selected</p>
              </div>
              <div>
                <span className="text-gray-500">Documents</span>
                <p className="font-medium text-gray-900">{data.documents.length} selected</p>
              </div>
            </div>

            {/* Disclaimer agreement */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <div className="flex gap-3 mb-4">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 text-sm mb-2">Before generating, please acknowledge:</p>
                  <ul className="text-amber-700 text-sm space-y-1 list-disc list-inside">
                    <li>Generated documents are <strong>templates</strong> and do <strong>not</strong> constitute legal advice</li>
                    <li>You should <strong>consult a qualified attorney</strong> before using in production</li>
                    <li>LegalKit is a <strong>template generator, not a law firm</strong></li>
                    <li>Documents may need customization for your specific circumstances</li>
                  </ul>
                </div>
              </div>
              <label className="flex items-center gap-2 text-sm font-medium text-amber-800 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreedToDisclaimer}
                  onChange={e => setAgreedToDisclaimer(e.target.checked)}
                  className="rounded text-amber-600"
                />
                I understand that these are templates and not legal advice
              </label>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          disabled={currentStepIndex === 0}
          className="flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <button
          onClick={nextStep}
          disabled={!canProceed()}
          className="flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {step === 'review' ? (
            <>
              <Scale className="w-4 h-4" />
              Generate Documents
            </>
          ) : (
            <>
              Next
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
