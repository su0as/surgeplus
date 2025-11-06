export default function FinalCTA() {
  return (
    <section className="py-32 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
          Ready to
          <br />
          <span className="text-[var(--surge-lime)]">Dominate?</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Join thousands of athletes tracking their surge to greatness.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--surge-lime)] text-black font-bold text-lg rounded-full hover:opacity-90 transition-opacity shadow-lg">
            Download for iOS
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
          </button>
          
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-100 transition-colors shadow-lg">
            Download for Android
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.523 15.341c-.759 0-1.374.615-1.374 1.374 0 .759.615 1.374 1.374 1.374s1.374-.615 1.374-1.374c0-.759-.615-1.374-1.374-1.374zm-11.046 0c-.759 0-1.374.615-1.374 1.374 0 .759.615 1.374 1.374 1.374s1.374-.615 1.374-1.374c0-.759-.615-1.374-1.374-1.374zM4.868 12.352L1.54 6.476c-.203-.358-.078-.808.28-1.011.356-.204.807-.078 1.011.28l3.354 5.915c1.868-.867 3.978-1.352 6.232-1.352 2.253 0 4.363.485 6.23 1.352l3.355-5.915c.203-.358.654-.484 1.011-.28.357.203.482.653.28 1.011L19.93 12.35c3.739 2.015 6.276 5.587 6.276 9.691H-.522c0-4.104 2.538-7.676 6.277-9.69z"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
