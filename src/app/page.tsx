import About from "./_components/About";
import Hero from '@/components/Hero';

export default function Home() {

  return (
    <main className="w-full py-16">
      <Hero />

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