import { DESIGN } from '@/constants/design';
import { cn } from '@/lib/utils';

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn(DESIGN.layout.section, className)}>
      {children}
    </section>
  );
}