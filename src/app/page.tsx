import Link from "next/link";

export default function Home() {
  return (
    <section className="flex items-center justify-center">
      {/* =========== HERO SECTION ============ */}
      <section className="text-center px-4 mt-6">
        <h1 className="text-5xl font-bold uppercase tracking-widest">
          I&apos;m Shubham Mishra.
        </h1>
        <h3 className="text-4xl uppercase font-semibold">
          Frontend Developer based in India.
        </h3>
        <p className="text-balance max-w-xl">
          I&apos;m probably the most passionate developer you&apos;ll ever get
          to work with. If you have a great project that needs some amazing
          skills, I&apos;m your guy.
        </p>

        {/* <Button variant="outline" className="mt-6 text-accent-foreground">
          <Link href="/contact" className="text-accent-foreground">Let&apos;s Connect</Link>
        </Button> */}
        <button className="border-[1px] border-red-500 px-4 py-2 rounded-full">
          <Link href="/contact" className="text-accent-foreground">
            Let&apos;s Connect
          </Link>
        </button>
      </section>
    </section>
  );
}