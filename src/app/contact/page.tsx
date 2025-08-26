import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactPage() {
  return (
    <form
      method="POST"
      action="https://formsubmit.co/shubhammishra10101998@gmail.com"
      encType="multipart/form-data"
      className="max-w-4xl mx-auto p-6 text-accent-foreground space-y-4 mt-6"
    >
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your email"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor={'message'}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Details of your problem"
          rows={4}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
      >
        Send Test
      </button>

      {/* ============ HERO SECTION ============ */}
      <section className="text-center md:text-center max-w-4xl px-4">
        <h1 className="text-center text-balance text-2xl text-gray-700">
          Full Stack Engineer
        </h1>
        <h1 className="text-5xl font-bold uppercase tracking-widest">
          I&apos;m Shubham Mishra.
        </h1>
        <h3 className="text-4xl uppercase font-semibold">
          Frontend Developer based in India.
        </h3>
        <p className="mt-4 md:mt-6 text-balance">
          I&apos;m probably the most passionate developer you&apos;ll ever get
          to work with. If you have a great project that needs some amazing
          skills, I&apos;m your guy.
        </p>

        {/* =========== CONNECTION =========== */}
        <Button variant="outline">
          <Link href="/contact">Let&apos;s Connect</Link>
        </Button>
      </section>
    </form>
  );
}
