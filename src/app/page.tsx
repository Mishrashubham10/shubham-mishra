import { About } from '@/components/sections/about/About';
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
      <About profile={portfolio.profile} />
    </main>
  );
}