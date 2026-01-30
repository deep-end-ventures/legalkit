'use client';

import Link from 'next/link';
import { Scale, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Scale className="w-6 h-6 text-indigo-600 group-hover:text-indigo-700 transition-colors" />
          <span className="font-bold text-xl text-gray-900">LegalKit</span>
        </Link>
        
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/#features" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Features</Link>
          <Link href="/#pricing" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Pricing</Link>
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
            <Link href="/#pricing" className="block text-gray-600 hover:text-gray-900 text-sm font-medium" onClick={() => setMobileOpen(false)}>Pricing</Link>
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
