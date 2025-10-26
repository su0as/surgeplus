import React from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import SectionWrapper from '@/components/ui/SectionWrapper';

export default function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      description: 'Get started with basic analysis',
      features: [
        '3 analyses/month',
        'Core AI report',
        'SURGE+ score (0-10)',
        'Basic feedback',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'SURGE+',
      price: '$14.99',
      period: '/month',
      yearlyPrice: '$149.99/year',
      description: 'Unlock unlimited potential',
      features: [
        '100 analyses/month',
        'Performance tracking with charts',
        'Game score logging',
        'Historical data',
        'Multi-sport support',
      ],
      cta: 'Start 3-Day Free Trial',
      popular: true,
    },
    {
      name: 'SURGE+ PRO',
      price: '$24.99',
      period: '/month',
      yearlyPrice: '$249.99/year',
      description: 'Professional-grade insights',
      features: [
        'Unlimited analyses',
        'All SURGE+ features',
        'Chat with your analysis (AI coach)',
        'Export PDF reports',
        'Advanced metrics',
        'Priority support',
      ],
      cta: 'Start 3-Day Free Trial',
      popular: false,
    },
  ];

  return (
    <SectionWrapper id="pricing" background="default">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
          Choose your plan
        </h2>
        <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
          Start with a 3-day free trial, cancel anytime
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div key={index} className="relative">
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <span className="bg-[#ADFF2F] text-black px-4 py-1 rounded-full text-sm font-bold">
                  POPULAR
                </span>
              </div>
            )}
            <Card
              className={`relative h-full flex flex-col ${
                plan.popular ? 'border-[#ADFF2F] border-4 shadow-[0_0_30px_rgba(173,255,47,0.3)]' : ''
              }`}
              hoverEffect={!plan.popular}
            >
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">{plan.name}</h3>
                <p className="text-[var(--text-secondary)] text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-5xl font-black text-[var(--foreground)]">{plan.price}</span>
                  <span className="text-[var(--text-secondary)]">{plan.period}</span>
                  {plan.yearlyPrice && (
                    <p className="text-[var(--text-secondary)] text-sm mt-1">
                      or {plan.yearlyPrice} <span className="text-[#ADFF2F]">(Save 17%)</span>
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-[var(--text-secondary)]">
                      <span className="text-[#ADFF2F] mr-2 mt-1">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant={plan.popular ? 'primary' : 'secondary'}
                href="https://apps.apple.com/"
                target="_blank"
                className="w-full"
              >
                {plan.cta}
              </Button>
            </Card>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
