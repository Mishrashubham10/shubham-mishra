import { DESIGN } from '@/constants/design';
import { cn } from '@/lib/utils';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return <div className={cn(DESIGN.layout.container, className)}>{children}</div>;
}