import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowUpRight, Github } from 'lucide-react';

type HeroActionsProps = {
  github?: string;
  live?: string;
  className?: string;
};

export function HeroActions({ github, live, className }: HeroActionsProps) {
  if (!github && !live) return null;

  return (
    <div className={cn('flex flex-wrap items-center gap-3', className)}>
      {live && (
        <Button asChild>
          <a href={live} target="_blank" rel="noopener noreferrer">
            Live Demo

            <ArrowUpRight className="size-4" />
          </a>
        </Button>
      )}

      {github && (
        <Button asChild variant="secondary">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Github className="size-4" />
            Source Code
          </a>
        </Button>
      )}
    </div>
  );
}