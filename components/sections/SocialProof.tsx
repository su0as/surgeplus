import React from 'react';
import Card from '@/components/ui/Card';
import SectionWrapper from '@/components/ui/SectionWrapper';

export default function SocialProof() {
  const testimonials = [
    {
      quote: 'SURGE helped me improve my golf swing in just 2 weeks! The AI feedback is incredibly detailed.',
      author: 'John D.',
      sport: 'Golfer',
    },
    {
      quote: 'The progress tracking feature keeps me motivated. I can see my tennis serve improving every session.',
      author: 'Sarah M.',
      sport: 'Tennis Player',
    },
    {
      quote: 'As a basketball coach, SURGE+ PRO helps me analyze my players technique quickly and effectively.',
      author: 'Mike R.',
      sport: 'Basketball Coach',
    },
  ];

  return (
    <SectionWrapper id="social-proof" background="secondary">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
          Join thousands improving their game
        </h2>
        
        {/* App Store Rating */}
        <div className="flex items-center justify-center space-x-2 text-3xl mb-4">
          <span>⭐⭐⭐⭐⭐</span>
        </div>
        <p className="text-lg text-[var(--text-secondary)]">
          4.8/5 rating • 1,234 reviews • 10,000+ downloads
        </p>
        <p className="text-xs text-[var(--text-tertiary)] mt-2">
          ⚠️ Placeholder data - Replace with actual metrics when available
        </p>
      </div>

      {/* Testimonials */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="flex flex-col">
            <div className="text-4xl text-[#ADFF2F] mb-4">"</div>
            <p className="text-[var(--foreground)] mb-6 flex-grow leading-relaxed">
              {testimonial.quote}
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-[var(--tertiary-bg)] flex items-center justify-center text-2xl">
                {testimonial.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-[var(--foreground)]">{testimonial.author}</p>
                <p className="text-sm text-[var(--text-secondary)]">{testimonial.sport}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
