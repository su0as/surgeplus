import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'default' | 'secondary' | 'dark';
}

export default function SectionWrapper({
  children,
  className = '',
  id,
  background = 'default',
}: SectionWrapperProps) {
  const backgroundStyles = {
    default: 'bg-[var(--background)]',
    secondary: 'bg-[var(--secondary-bg)]',
    dark: 'bg-black text-white',
  };

  return (
    <section
      id={id}
      className={`
        py-20 
        md:py-32 
        ${backgroundStyles[background]}
        ${className}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">{children}</div>
    </section>
  );
}
