import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid md:grid-cols-2 place-items-center min-h-screen px-4 md:px-16 lg:px-32 py-6 mx-auto">
      <div className="text-left md:text-left max-w-[100%] px-4">
        <h1 className="text-5xl font-bold uppercase tracking-widest">
          I&apos;m Shubham Mishra.
        </h1>
        <h3 className="text-4xl uppercase font-semibold">
          Frontend Developer based in India.
        </h3>
        <p className="max-w-md mt-4 md:mt-6">
          I&apos;m probably the most passionate developer you&apos;ll ever get to work
          with. If you have a great project that needs some amazing skills, I&apos;m
          your guy.
        </p>

        {/* =========== CONNECTION =========== */}
        <div className="mt-12 flex flex-col items-start sm:flex-row sm:items-center gap-4">
          <Button variant="outline" size="lg">
            <Linkedin />
            Let&apos;s Connect on Linkedin
          </Button>
          <Button variant="outline" size="lg">
            <Mail />
            Or Send Me an Email
          </Button>
        </div>
      </div>
      <div className="py-6 px-8 bg-accent rounded-md shadow-lg mt-8 md:mt-0">
        <Image
          src="https://cdn.pixabay.com/photo/2023/07/04/19/43/man-8106958_1280.png"
          height={400}
          width={400}
          alt="This is hero image"
          className="object-cover rounded-sm"
        />
      </div>

      {/* AI */}
      <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Image */}
        <div className="order-2 lg:order-1 flex justify-center">
          <div className="relative">
            <Image
              src="/professional-developer-workspace-with-modern-setup.png"
              alt="Developer workspace"
              className="rounded-lg shadow-2xl w-full max-w-md"
              height={400}
              width={400}
            />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="order-1 lg:order-2 text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Crafting Code with <span className="text-primary">Creativity</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Transforming ideas into elegant digital solutions. Let&apos;s build something amazing together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors shadow-lg">
              View My Work
            </button>
            <button className="border border-border text-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-muted transition-colors">
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Social Media Links - Bottom */}
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
    </main>
    </div>
  );
}