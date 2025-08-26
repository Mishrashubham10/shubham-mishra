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
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="py-3 px-4 md:px-16 lg:px-32 bg-accent flex items-center justify-between shadow-md mt-4 mx-4 md:mx-32 rounded-full">
      <h2 className="text-accent-foreground font-semibold text-2xl md:text-4xl hover:text-ring">
        <Link href="/">Shubham.dev</Link>
      </h2>

      <ul className="hidden gap-6 text-md uppercase md:flex">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={cn(
                'px-3 py-2 rounded-md transition-colors',
                pathname === item.href
                  ? 'bg-background text-forebackground'
                  : 'text-accent-foreground hover:bg-muted'
              )}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* ============ THEME TOGGLER ============ */}
      <div className="hidden md:block">
        <ThemeToggle />
      </div>

      {/* =========== MOBILE NAVBAR ============ */}
      <Button
        asChild
        size="icon"
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>

      {/* =========== MOBILE MENU ========== */}
      {isOpen && (
        <ul className="absolute top-20 mx-4 left-0 min-w-full bg-accent flex flex-col gap-2 p-4 md:hidden text-accent-foreground">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  'block px-3 py-2 rounded-md transition-colors',
                  pathname === item.href
                    ? 'bg-ring text-white'
                    : 'text-accent-foreground hover:bg-muted'
                )}
                onClick={() => setIsOpen(false)} // close menu on click
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}