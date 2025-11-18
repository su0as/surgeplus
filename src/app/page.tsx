import Hero from '@/components/sections/NewHero';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <main id="main-content" style={{ height: '100vh', overflow: 'hidden' }}>
        <Hero />
      </main>
      <Footer />
    </>
  );
}
