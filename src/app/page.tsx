'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="w-full max-h-[calc(100vh-4rem)] overflow-hidden">
      <section className="min-h-screen flex items-center justify-center text-accent">
        <div
          className="items-center flex flex-col gap-6"
        >
          <h1 className="text-2xl font-semibold">
            Hi!, I&apos;m Shubham Mishra 👋
          </h1>

          <div className="flex flex-col gap-2">
            <h2 className="text-5xl font-bold tracking-wide text-balance">
              Frontend web developer based in mumbai.
            </h2>
            <p className="text-lg font-normal tracking-tighter text-balance">
              I&apos;m a frontend developer from Mumbai, India with 1.5 years of
              industry working experience and 1 years of freelancing experience.
            </p>
          </div>

          <Link href="/contact" className="bg-foreground font-semibold text-md border-[0.2px] border-foreground py-3 px-6 rounded-full shadow-lg w-max">
            Let&apos;s Connect
          </Link>
        </div>
      </section>
    </main>
  );
}