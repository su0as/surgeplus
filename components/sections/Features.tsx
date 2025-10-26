import React from 'react';
import Card from '@/components/ui/Card';
import SectionWrapper from '@/components/ui/SectionWrapper';

export default function Features() {
  const features = [
    {
      icon: '📹',
      title: 'Record & Analyze',
      description:
        'Upload your swing, serve, or shot. Get instant AI-powered feedback with a SURGE+ score (0-10) and detailed technique breakdown.',
    },
    {
      icon: '📊',
      title: 'See Your Growth',
      description:
        'Visualize your improvement over time with performance trends, score history, and game logging for Golf, Tennis, Basketball, and Pickleball.',
    },
    {
      icon: '💬',
      title: 'Ask Questions',
      description:
        'Get instant answers about your analysis. Our AI coach explains what to fix and how to improve with personalized insights.',
    },
  ];

  return (
    <SectionWrapper id="features" background="secondary">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
          Train smarter, not harder
        </h2>
        <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
          Everything you need to improve your sports performance with AI-powered insights
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="text-center">
            <div className="text-6xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-3">
              {feature.title}
            </h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">{feature.description}</p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
