'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

function LegalKitLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" fill="none" className={className}>
      <defs>
        <linearGradient id="lk-hdr" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6366f1"/>
          <stop offset="100%" stopColor="#4338ca"/>
        </linearGradient>
      </defs>
      <path d="M55 30 L165 30 L195 60 L195 210 L55 210 Z" fill="url(#lk-hdr)" rx="4"/>
      <path d="M165 30 L165 60 L195 60 Z" fill="#312e81"/>
      <rect x="78" y="85" width="90" height="5" rx="2.5" fill="#ffffff" opacity="0.7"/>
      <rect x="78" y="102" width="75" height="5" rx="2.5" fill="#ffffff" opacity="0.5"/>
      <rect x="78" y="119" width="85" height="5" rx="2.5" fill="#ffffff" opacity="0.4"/>
      <rect x="78" y="136" width="60" height="5" rx="2.5" fill="#ffffff" opacity="0.3"/>
      <g transform="translate(160, 155)">
        <path d="M0 -28 L28 -14 L28 8 C28 22 16 32 0 38 C-16 32 -28 22 -28 8 L-28 -14 Z" fill="#4338ca" stroke="#ffffff" strokeWidth="3"/>
        <polyline points="-10,2 -3,10 12,-6" fill="none" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <text x="78" y="72" fontFamily="Georgia, serif" fontSize="28" fontWeight="bold" fill="#ffffff" opacity="0.9">§</text>
    </svg>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <LegalKitLogo className="h-8 w-8" />
          <span className="font-bold text-xl text-gray-900">LegalKit</span>
        </Link>
        
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/#features" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Features</Link>
          <Link href="/pricing" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Pricing</Link>
          <Link href="/blog" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Blog</Link>
          <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Dashboard</Link>
          <Link href="/generate" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Generate Documents
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            <Link href="/#features" className="block text-gray-600 hover:text-gray-900 text-sm font-medium" onClick={() => setMobileOpen(false)}>Features</Link>
            <Link href="/pricing" className="block text-gray-600 hover:text-gray-900 text-sm font-medium" onClick={() => setMobileOpen(false)}>Pricing</Link>
            <Link href="/blog" className="block text-gray-600 hover:text-gray-900 text-sm font-medium" onClick={() => setMobileOpen(false)}>Blog</Link>
            <Link href="/dashboard" className="block text-gray-600 hover:text-gray-900 text-sm font-medium" onClick={() => setMobileOpen(false)}>Dashboard</Link>
            <Link href="/generate" className="block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium text-center" onClick={() => setMobileOpen(false)}>
              Generate Documents
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
