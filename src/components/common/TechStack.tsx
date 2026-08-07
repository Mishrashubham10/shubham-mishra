import Link from 'next/link';

import { DESIGN } from '@/constants/design';
import { technologyIcons } from '@/lib/technology-icons';
import { cn } from '@/lib/utils';
import { Technology } from '@/types/domain';

type TechStackProps = {
  technologies: Technology[];
  limit?: number;
  size?: 'sm' | 'md';
  showIcons?: boolean;
  className?: string;
};

export function TechStack({
  technologies,
  limit,
  size = 'md',
  showIcons = true,
  className,
}: TechStackProps) {
  const stack = limit ? technologies.slice(0, limit) : technologies;

  return (
    <ul className={cn(DESIGN.components.techStack.wrapper, className)}>
      {stack.map((technology) => {
        const Icon = technologyIcons[technology.id];

        const content = (
          <>
            {showIcons && Icon && (
              <Icon
                className={cn(
                  DESIGN.components.techStack.icon,
                  size === 'sm' && 'size-3.5',
                  size === 'md' && 'size-4',
                )}
              />
            )}

            <span>{technology.name}</span>
          </>
        );

        return (
          <li key={technology.id}>
            {technology.officialUrl ? (
              <Link
                href={technology.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  DESIGN.components.techStack.pill,
                  size === 'sm' && DESIGN.components.techStack.small,
                  size === 'md' && DESIGN.components.techStack.medium,
                )}
              >
                {content}
              </Link>
            ) : (
              <span
                className={cn(
                  DESIGN.components.techStack.pill,
                  size === 'sm' && DESIGN.components.techStack.small,
                  size === 'md' && DESIGN.components.techStack.medium,
                )}
              >
                {content}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}