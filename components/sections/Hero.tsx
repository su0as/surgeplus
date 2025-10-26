import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-black leading-tight mb-6 tracking-tight">
            UNLEASH YOUR TRUE
            <br />
            ATHLETIC POTENTIAL
          </h1>
          
          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-gray-700 mb-6 font-semibold">
            Stop guessing. Start dominating with AI-powered precision.
          </p>

          {/* Social Proof */}
          <div className="flex items-center justify-center space-x-3 mb-12">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
              ))}
            </div>
            <span className="text-lg font-bold text-black">4.9</span>
            <span className="text-gray-600">• Trusted by 50,000+ athletes</span>
          </div>

          {/* Phone Mockup */}
          <div className="relative max-w-sm mx-auto mb-12">
            <div className="relative w-full aspect-[9/19] mx-auto">
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-black rounded-[3rem] shadow-2xl">
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10"></div>
              </div>
              {/* Phone Screen */}
              <div className="absolute inset-3 bg-white rounded-[2.5rem] overflow-hidden">
                <Image
                  src="/images/surge-icon.png"
                  alt="SURGE+ App Interface"
                  fill
                  className="object-contain p-6"
                  priority
                />
              </div>
            </div>
          </div>

          {/* App Store Badges */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://apps.apple.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <div className="bg-black text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                <span>Download on the App Store</span>
              </div>
            </a>
            <a
              href="https://play.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <div className="bg-black text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <span>Get it on Google Play</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
