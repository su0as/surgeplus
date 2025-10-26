import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const links = [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Contact', href: 'mailto:support@surge.app' },
    { label: 'FAQ', href: '#' },
  ];

  return (
    <footer className="bg-white border-t border-gray-100 py-8">
      <div className="w-full flex justify-center px-6">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {links.map((link) => (
            <React.Fragment key={link.label}>
              {link.href.startsWith('mailto') || link.href === '#' ? (
                <a
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-black transition-colors whitespace-nowrap"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-black transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
}
