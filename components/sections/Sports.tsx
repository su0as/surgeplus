import React from 'react';
import Card from '@/components/ui/Card';
import SectionWrapper from '@/components/ui/SectionWrapper';

export default function Sports() {
  const sports = [
    { emoji: '⛳', name: 'Golf' },
    { emoji: '🎾', name: 'Tennis' },
    { emoji: '🏀', name: 'Basketball' },
    { emoji: '🏓', name: 'Pickleball' },
  ];

  return (
    <SectionWrapper id="sports" background="secondary">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
          Built for athletes across multiple sports
        </h2>
        <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
          Comprehensive analysis for your favorite activities
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {sports.map((sport, index) => (
          <Card key={index} className="text-center group cursor-pointer">
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {sport.emoji}
            </div>
            <h3 className="text-xl font-semibold text-[var(--foreground)]">{sport.name}</h3>
          </Card>
        ))}
      </div>

      <p className="text-center text-[var(--text-secondary)] mt-8">
        More sports coming soon...
      </p>
    </SectionWrapper>
  );
}
