import React from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Record Your Technique',
      description: 'Use your phone to capture your form in action',
    },
    {
      number: '02',
      title: 'Get AI Analysis',
      description: 'Our AI analyzes your technique and gives you a score with actionable insights',
    },
    {
      number: '03',
      title: 'Track Your Progress',
      description: 'Watch your scores improve as you implement changes',
    },
  ];

  return (
    <SectionWrapper id="how-it-works" background="default">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
          Stop guessing. Start improving.
        </h2>
        <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
          Get started in three simple steps
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {steps.map((step, index) => (
          <div key={index} className="relative text-center">
            {/* Step Number Circle */}
            <div className="w-20 h-20 bg-[#ADFF2F] text-black rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-6 shadow-lg">
              {step.number}
            </div>

            {/* Connecting Line (except last item) */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-10 left-1/2 w-full h-1 bg-[#ADFF2F]/30 -z-10"></div>
            )}

            {/* Content */}
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-3">{step.title}</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">{step.description}</p>

            {/* Placeholder Image Hint */}
            <div className="mt-6 bg-[var(--tertiary-bg)] rounded-xl p-8 border-2 border-dashed border-[var(--text-tertiary)] min-h-[240px] flex items-center justify-center">
              <span className="text-[var(--text-tertiary)] text-sm text-center">
                iPhone Mockup<br />Step {step.number}
              </span>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
