import { DESIGN } from '@/constants/design';
import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

type SectionProps = React.PropsWithChildren<ComponentProps<'section'>>;

export function Section({ id, children, className, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(DESIGN.layout.section, className)}
      {...props}
    >
      {children}
    </section>
  );
}