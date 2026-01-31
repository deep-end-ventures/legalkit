import { DISCLAIMERS } from '@/lib/disclaimers';
import Link from 'next/link';
import { Scale } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Scale className="w-5 h-5 text-indigo-400" />
              <span className="font-bold text-white text-lg">LegalKit</span>
            </div>
            <p className="text-sm text-gray-400 max-w-md">
              Generate professional legal documents for your business in minutes.
              Privacy policies, terms of service, cookie policies, and more.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/generate" className="hover:text-white transition-colors">Generate Documents</Link></li>
              <li><Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
              <li><Link href="/#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="bg-gray-800 rounded-lg p-4 mb-6">
            <p className="text-xs text-amber-300 font-medium mb-1">⚠️ Important Disclaimer</p>
            <p className="text-xs text-gray-400">{DISCLAIMERS.siteFooter}</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} LegalKit. A{' '}
              <a
                href="https://deep-end-ventures-site-amber.vercel.app"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deep End Ventures
              </a>{' '}
              company. All rights reserved.
            </p>
            <p className="text-xs text-gray-500">
              Template generator — not a law firm.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
