'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/#features', label: 'Features' },
    { href: '/#how-it-works', label: 'How It Works' },
    { href: '/#pricing', label: 'Pricing' },
    { href: 'https://apps.apple.com/', label: 'Download', primary: true },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[var(--card-bg)] border-b border-[var(--text-tertiary)]/20 backdrop-blur-lg bg-opacity-90">
      <nav className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="flex items-center">
              <Image
                src="/images/surge-icon.png"
                alt="SURGE Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
            </div>
            <span className="text-2xl font-black text-[var(--foreground)] group-hover:text-[#ADFF2F] transition-colors">
              SURGE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.primary ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-[#ADFF2F] text-black font-semibold rounded-lg hover:bg-[#9BFF00] transition-all hover:scale-105"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[var(--text-secondary)] hover:text-[#ADFF2F] font-medium transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ADFF2F] group-hover:w-full transition-all duration-300"></span>
                </a>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[var(--secondary-bg)] transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-[var(--foreground)]"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[var(--text-tertiary)]/20 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`block py-3 px-4 rounded-lg mb-2 font-medium transition-colors ${
                  link.primary
                    ? 'bg-[#ADFF2F] text-black text-center'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--secondary-bg)] hover:text-[#ADFF2F]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
