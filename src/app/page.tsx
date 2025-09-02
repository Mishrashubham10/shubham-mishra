'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import About from "./_components/About";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.querySelector('#about');
    if (aboutSection) observer.observe(aboutSection);

    return () => {
      if (aboutSection) observer.unobserve(aboutSection);
    };
  }, []);

  return (
    <main className="w-full max-h-[calc(100vh-4rem)] overflow-auto overflow-x-hidden">
      <section className="h-screen flex items-center justify-center text-accent">
        <div className="flex flex-col items-center justify-center gap-4 max-w-4xl mx-auto">
          <h1 className="text-4xl font-semibold">
            Hi!, I&apos;m Shubham Mishra 👋
          </h1>

          <div className="flex items-center flex-col gap-4 mt-2">
            <h2 className="text-7xl font-bold tracking-wide text-center">
              Frontend web developer based in mumbai.
            </h2>
            <p className="font-normal tracking-tighter text-center text-2xl">
              I&apos;m a frontend developer from Mumbai, India with 1.5 years of
              industry working experience and 1 years of freelancing experience.
            </p>
          </div>

          <Link
            href="/contact"
            className="bg-foreground font-semibold text-md border-[0.2px] border-foreground py-3 px-6 rounded-full shadow-lg w-max mt-3"
          >
            Let&apos;s Connect
          </Link>
        </div>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center bg-background text-accent opacity-0 translate-y-10 transition-all duration-700"
      >
        <About />
      </section>
    </main>
  );
}