import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--background)]/80 backdrop-blur-sm border-b border-[var(--text-tertiary)]/10">
      <nav className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-center h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <Image
              src="/images/surge-icon.png"
              alt="SURGE"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="text-xl font-black text-[var(--foreground)]">
              surge
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
