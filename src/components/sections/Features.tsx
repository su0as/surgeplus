export default function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Real-Time Tracking',
      description: 'Monitor your performance as it happens with live data sync.'
    },
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description: 'Deep insights into your progress with AI-powered analysis.'
    },
    {
      icon: '🎯',
      title: 'Goal Setting',
      description: 'Set ambitious targets and crush them with precision tracking.'
    },
    {
      icon: '🏆',
      title: 'Compete & Compare',
      description: 'Challenge friends and climb the leaderboards.'
    }
  ];

  return (
    <section className="py-32 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Built for <span className="text-[var(--surge-lime)]">Champions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to track, analyze, and dominate your sport.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-3xl hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
