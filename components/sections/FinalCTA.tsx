import React from 'react';
import Image from 'next/image';
import SectionWrapper from '@/components/ui/SectionWrapper';

export default function FinalCTA() {
  return (
    <SectionWrapper background="dark" className="relative overflow-hidden">
      <div className="relative z-10 text-center">
        <h2 className="text-5xl md:text-6xl font-black mb-6">
          Ready to stop guessing?
        </h2>
        <p className="text-2xl md:text-3xl font-bold mb-8 text-white/90">
          Download SURGE+ and take control
        </p>

        {/* App Store Button */}
        <a
          href="https://apps.apple.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-6 hover:scale-105 transition-transform duration-200"
        >
          <div className="bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#ADFF2F] transition-colors">
            Download on the App Store
          </div>
        </a>

        <p className="text-white/70 text-sm">
          Coming soon to Android
        </p>

        {/* Hero Image with Glow */}
        <div className="mt-12 flex justify-center">
          <div className="relative glow-lime">
            <Image
              src="/images/surge-icon.png"
              alt="SURGE App"
              width={200}
              height={200}
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#ADFF2F] rounded-full blur-[128px] opacity-20 -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#9BFF00] rounded-full blur-[128px] opacity-10 -z-10"></div>
    </SectionWrapper>
  );
}
