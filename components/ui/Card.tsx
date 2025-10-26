import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function Card({ children, className = '', hoverEffect = true }: CardProps) {
  const hoverStyles = hoverEffect
    ? 'hover:border-[#ADFF2F] hover:shadow-[0_0_20px_rgba(173,255,47,0.2)] hover:-translate-y-1'
    : '';

  return (
    <div
      className={`
        bg-[var(--card-bg)] 
        rounded-2xl 
        p-8 
        border-2 
        border-transparent
        transition-all 
        duration-300 
        shadow-md
        ${hoverStyles}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
