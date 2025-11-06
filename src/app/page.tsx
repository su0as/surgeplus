import Hero from '@/components/sections/NewHero';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <main id="main-content" className="min-h-screen">
        <Hero />
      </main>
      <Footer />
    </>
  );
}
