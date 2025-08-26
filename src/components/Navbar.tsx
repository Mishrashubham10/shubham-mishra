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
    // { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="w-full z-50 flex justify-center py-4">
      <nav className="mt-5 flex items-center justify-between flex-wrap w-[90%] max-w-5xl my-0 mx-auto md:rounded-full bg-accent py-4 px-4">
        <h2 className="text-accent-foreground font-semibold text-xl">
          <Link href="/">Shubham.dev</Link>
        </h2>

        <ul className="hidden gap-6 text-md uppercase md:flex items-center">
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
          <div className="hidden md:block">
          <ThemeToggle />
        </div>
        </ul>

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
    </header>
  );
}