import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const links = [
    { label: 'Blog', href: '#' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Contact', href: 'mailto:support@surge.app' },
    { label: 'FAQ', href: '#' },
  ];

  return (
    <footer className="bg-[var(--background)] border-t border-[var(--text-tertiary)]/10 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
          {links.map((link, index) => (
            <React.Fragment key={link.label}>
              {link.href.startsWith('mailto') || link.href.startsWith('http') || link.href === '#' ? (
                <a
                  href={link.href}
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
                >
                  {link.label}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
        
        <p className="text-center text-sm text-[var(--text-tertiary)]">
          © 2025 surge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
