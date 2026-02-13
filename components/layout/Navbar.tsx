'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'Who We Are' },
    { href: '/programs', label: 'Focus Areas' },
    { href: '/team', label: 'Our Team' },
  ];

  return (
    <nav className="bg-white shadow-md border-b sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span className="text-2xl font-black text-blue-600">IKC</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-gray-800 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
         
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-800 hover:text-blue-600 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-base font-semibold text-gray-800 hover:text-blue-600 transition-colors py-2 px-3 rounded hover:bg-blue-50"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/admin"
              onClick={() => setIsOpen(false)}
              className="block text-base font-semibold text-gray-600 hover:text-blue-600 transition-colors border border-gray-300 px-3 py-2 rounded hover:border-blue-600 hover:bg-blue-50 text-center"
            >
              Admin
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
