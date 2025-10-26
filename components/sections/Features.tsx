import React from 'react';

export default function Features() {
  const features = [
    {
      icon: '📊',
      title: 'Track your progress',
      description: 'See exactly how much time you waste on analyzing your technique',
    },
    {
      icon: '⏱️',
      title: 'Set limits',
      description: 'Create boundaries for healthier training habits',
    },
    {
      icon: '🧠',
      title: 'AI coaching',
      description: 'Block distractions when you need to focus on improvement',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-[var(--background)] px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center text-[var(--foreground)] mb-16">
          Take back control
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[var(--card-bg)] rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">
                {feature.title}
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
