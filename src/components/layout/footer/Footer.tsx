import { Container } from "@/components/common";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shubham Mishra.
          </p>

          <p className="text-sm text-muted-foreground">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  );
}