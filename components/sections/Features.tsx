import React from 'react';

export default function Features() {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: 'AI VIDEO ANALYSIS',
      description: 'Real-time feedback for precise improvements.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'SMART TRAINING PLANS',
      description: 'Adaptive plans built for your unique needs.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'PERFORMANCE TRACKING',
      description: 'Monitor progress and crush your goals.',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex justify-center w-full mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-center text-black tracking-tight">
            GAIN YOUR COMPETITIVE EDGE
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-xl p-8 flex flex-col items-center text-center hover:border-[#ADFF2F] transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex justify-center items-center mb-6 text-black">
                {feature.icon}
              </div>
              <h3 className="text-lg font-black text-black mb-3 tracking-tight w-full">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed w-full">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
