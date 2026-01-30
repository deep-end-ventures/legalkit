'use client';

import { useState, useEffect } from 'react';
import { GeneratedDocument } from '@/lib/types';
import { FileText, Download, Trash2, Plus, Copy, Check, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { DISCLAIMERS } from '@/lib/disclaimers';

export default function DashboardPage() {
  const [documents, setDocuments] = useState<GeneratedDocument[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('legalkit_documents') || '[]');
    setDocuments(stored);
  }, []);

  const handleDelete = (id: string) => {
    const updated = documents.filter(d => d.id !== id);
    setDocuments(updated);
    localStorage.setItem('legalkit_documents', JSON.stringify(updated));
  };

  const handleCopy = (content: string, id: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDownload = (doc: GeneratedDocument, format: 'md' | 'html') => {
    const content = format === 'md' ? doc.markdownContent : doc.htmlContent;
    const mimeType = format === 'md' ? 'text/markdown' : 'text/html';
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${doc.type}-${doc.companyName.toLowerCase().replace(/\s+/g, '-')}.${format}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'privacy_policy': return 'Privacy Policy';
      case 'terms_of_service': return 'Terms of Service';
      case 'cookie_policy': return 'Cookie Policy';
      default: return type;
    }
  };

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case 'privacy_policy': return 'bg-blue-100 text-blue-700';
      case 'terms_of_service': return 'bg-purple-100 text-purple-700';
      case 'cookie_policy': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Your Documents</h1>
          <p className="text-gray-600 mt-1">Manage and download your generated legal documents</p>
        </div>
        <Link
          href="/generate"
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
        >
          <Plus className="w-4 h-4" />
          New Document
        </Link>
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
        <div className="flex gap-2 items-center text-sm text-amber-800">
          <AlertTriangle className="w-4 h-4 flex-shrink-0" />
          <p>{DISCLAIMERS.siteFooter}</p>
        </div>
      </div>

      {documents.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-200">
          <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">No documents yet</h2>
          <p className="text-gray-600 mb-6">Generate your first legal document to get started.</p>
          <Link
            href="/generate"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <Plus className="w-4 h-4" />
            Generate Document
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {documents.map(doc => (
            <div key={doc.id} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-300 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-indigo-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{doc.title}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getTypeBadgeColor(doc.type)}`}>
                        {getTypeLabel(doc.type)}
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(doc.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(doc.markdownContent, doc.id)}
                    className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    title="Copy Markdown"
                  >
                    {copiedId === doc.id ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => handleDownload(doc, 'md')}
                    className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    title="Download Markdown"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDownload(doc, 'html')}
                    className="px-3 py-1.5 text-xs font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    HTML
                  </button>
                  <button
                    onClick={() => handleDelete(doc.id)}
                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
