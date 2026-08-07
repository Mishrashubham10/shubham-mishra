import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { Container } from '../common';

type ProjectLayoutProps = {
  children: ReactNode;
  className?: string;
};

export function ProjectLayout({ children, className }: ProjectLayoutProps) {
  return (
    <main className={cn('relative overflow-hidden', className)}>
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-112 bg-linear-to-b from-primary/5 to-transparent"
      />

      <Container>{children}</Container>
    </main>
  );
}