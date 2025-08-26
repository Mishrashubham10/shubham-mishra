import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function ProjectPage() {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-accent-foreground">
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

        {/* ========= HERO SECTIONS LINK ============ */}
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
  )
}