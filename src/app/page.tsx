import { Hero } from '@/components/sections/hero/Hero';
import { portfolio } from '@/data/portfolio';

export default function Home() {
  return (
    <main className="w-full py-16">
      <Hero
        profile={portfolio.profile}
        products={portfolio.products}
        learning={portfolio.learning}
      />

      {/* ============= About Me Section =========== */}
      {/* <section
        id="about"
        className="min-h-screen flex items-center justify-center bg-background text-accent opacity-0 translate-y-10 transition-all duration-700 max-w-5xl mx-auto overflow-hidden"
      >
        <About />
      </section> */}
    </main>
  );
}