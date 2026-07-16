import { cn } from '@/lib/utils';
import { DESIGN } from '@/constants/design';
import { Badge } from './Badge';

type SectionHeadingProps = {
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeading({
  badge,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        DESIGN.components.sectionHeading.wrapper,
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {badge && <Badge>{badge}</Badge>}

      <h2 className={DESIGN.components.sectionHeading.title}>{title}</h2>

      {description && (
        <p className={DESIGN.components.sectionHeading.description}>
          {description}
        </p>
      )}
    </div>
  );
}