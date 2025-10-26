import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import FinalCTA from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <FinalCTA />
    </main>
  );
}
