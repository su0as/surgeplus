import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <span className="text-green-400 text-2xl font-black">&gt;&gt;&gt;</span>
              <span className="text-2xl font-black text-black tracking-tight">SURGE+</span>
            </div>
          </Link>

          {/* Download Button */}
          <a
            href="https://apps.apple.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ADFF2F] hover:bg-[#9BFF00] text-black font-bold px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg"
          >
            Download App
          </a>
        </div>
      </nav>
    </header>
  );
}
