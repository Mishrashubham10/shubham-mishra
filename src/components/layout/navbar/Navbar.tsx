import Link from 'next/link';

import { AppButton, Container } from '@/components/common';
import { Logo } from './Logo';
import ThemeToggle from '@/components/ThemeToggle';
import { MobileNav } from './MobileNav';

import { portfolio } from '@/data/portfolio';
import type { NavigationItem } from '@/types/domain';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-8 lg:flex">
          {portfolio.navigation.map((item: NavigationItem) => (
            <Link
              key={item.id}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />

          <AppButton
            href={portfolio.profile.resumeUrl}
            rel="noopener noreferrer"
            size="sm"
          >
            View Resume
          </AppButton>
        </div>

        {/* Mobile */}

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />

          <MobileNav />
        </div>
      </Container>
    </header>
  );
}