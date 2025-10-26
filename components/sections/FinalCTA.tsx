import React from 'react';

export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="w-full flex justify-center px-6">
        {/* Large CTA Button */}
        <a
          href="https://apps.apple.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <button className="bg-[#ADFF2F] hover:bg-[#9BFF00] text-black font-black text-xl md:text-2xl px-12 md:px-16 py-5 md:py-6 rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-[0_20px_60px_rgba(173,255,47,0.4)] tracking-tight whitespace-nowrap">
            START YOUR FREE TRIAL
          </button>
        </a>
      </div>
    </section>
  );
}
