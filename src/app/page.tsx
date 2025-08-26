import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="border-1 h-screen w-full mx-auto overflow-y-hidden">
      <div className="flex items-center justify-center h-screen">
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
        {/* <div className="py-6 px-8 bg-accent rounded-md shadow-lg mt-8 md:mt-0">
        <Image
          src="https://cdn.pixabay.com/photo/2023/07/04/19/43/man-8106958_1280.png"
          height={400}
          width={400}
          alt="This is hero image"
          className="object-cover rounded-sm"
        />
      </div> */}

        {/* AI */}
        <section className="bg-background flex items-center justify-center">
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center gap-6 bg-card/80 backdrop-blur-sm border border-border rounded-full px-6 py-3 shadow-lg">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors p-2"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors p-2"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors p-2"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href="mailto:hello@example.com"
                className="text-muted-foreground hover:text-accent transition-colors p-2"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}