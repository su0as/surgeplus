import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  target,
  type = 'button',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 ease-in-out';

  const variantStyles = {
    primary:
      'bg-[#ADFF2F] text-black hover:bg-[#9BFF00] hover:scale-105 active:scale-95 shadow-lg hover:shadow-[0_0_20px_rgba(173,255,47,0.4)]',
    secondary:
      'bg-transparent border-2 border-[var(--text-secondary)] text-[var(--text-primary)] hover:border-[#ADFF2F] hover:text-[#ADFF2F] active:scale-95',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http');
    
    if (isExternal) {
      return (
        <a
          href={href}
          className={combinedClassName}
          target={target || '_blank'}
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
