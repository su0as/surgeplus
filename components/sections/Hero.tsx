import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[var(--background)] px-6 md:px-8 pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center md:text-left animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[var(--foreground)] leading-tight mb-6">
              Your performance,{' '}
              <span className="text-gradient-lime">analyzed.</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-8 max-w-2xl">
              AI-powered video analysis for athletes. Upload your form, get instant feedback,
              and track your progress.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                variant="primary"
                href="https://apps.apple.com/"
                target="_blank"
              >
                Download on the App Store
              </Button>
              <Button
                variant="secondary"
                href="/#how-it-works"
              >
                See How It Works
              </Button>
            </div>

            {/* Social Proof */}
            <div className="mt-8 flex items-center justify-center md:justify-start space-x-6 text-sm text-[var(--text-secondary)]">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                <span>4.8/5</span>
              </div>
              <div className="h-4 w-px bg-[var(--text-tertiary)]"></div>
              <span>10,000+ downloads</span>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative flex items-center justify-center animate-scale-in">
            <div className="relative glow-lime rounded-3xl">
              <Image
                src="/images/surge-icon.png"
                alt="SURGE App"
                width={500}
                height={500}
                priority
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
