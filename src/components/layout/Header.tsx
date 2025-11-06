export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-black">
          SURGE<span className="text-[var(--surge-lime)]">+</span>
        </div>

        {/* CTA Button */}
        <button className="px-6 py-2 bg-[var(--surge-lime)] text-black font-bold text-sm rounded-full hover:opacity-90 transition-opacity">
          DOWNLOAD APP
        </button>
      </div>
    </header>
  );
}
