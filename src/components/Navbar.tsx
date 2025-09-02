'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="w-full fixed top-0 z-50 shadow-md">
      <nav className="bg-background text-foreground flex items-center justify-between flex-wrap h-16 px-4 md:px-16 lg:px-32 transition-colors duration-300">
        {/* Logo */}
        <h2 className="text-accent font-bold text-2xl">
          <Link href="/">Shubham.dev</Link>
        </h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 uppercase items-center text-foreground">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  'px-3 py-2 rounded-md transition-colors duration-200',
                  pathname === item.href
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted hover:text-foreground'
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </ul>

        {/* Mobile Menu Button */}
        <Button
          asChild
          size="icon"
          variant="outline"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden border-foreground text-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="absolute top-full left-0 w-full bg-background flex flex-col gap-2 p-4 shadow-lg md:hidden transition-colors duration-300">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'block px-4 py-2 rounded-md transition-colors duration-200',
                    pathname === item.href
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted hover:text-foreground'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <div className="mt-2">
              <ThemeToggle />
            </div>
          </ul>
        )}
      </nav>
    </header>
  );
}