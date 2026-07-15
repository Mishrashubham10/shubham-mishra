import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2">Shubham Mishra</h3>
            <p className="text-muted-foreground text-sm">
              Software Developer | Full Stack Engineer
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/Mishrashubham10"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors border border-border hover:border-primary group"
            >
              <Github className="h-5 w-5 group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/mishrashubham10/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors border border-border hover:border-primary group"
            >
              <Linkedin className="h-5 w-5 group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:shubhdev101@gmail.com"
              className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors border border-border hover:border-primary group"
            >
              <Mail className="h-5 w-5 group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Shubham Mishra. Built with{' '}
            <Heart className="h-4 w-4 text-primary fill-primary" /> using React
            & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
