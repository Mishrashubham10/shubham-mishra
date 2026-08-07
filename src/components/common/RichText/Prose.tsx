import { DESIGN } from '@/constants/design';
import { cn } from '@/lib/utils';

type ProseProps = {
  children: string;
  className?: string;
};

export function Prose({ children, className }: ProseProps) {
  const paragraphs = children.split('\n\n').filter(Boolean);

  return (
    <div className={cn(DESIGN.components.richText.wrapper, className)}>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className={DESIGN.components.richText.paragraph}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}