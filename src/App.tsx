import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { About } from '@/components/sections/About';
import { Testimonials } from '@/components/sections/Testimonials';
import { Pricing } from '@/components/sections/Pricing';
import { CTA } from '@/components/sections/CTA';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-ink-900 dark:bg-ink-950 dark:text-ink-100">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Testimonials />
        <Pricing />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
