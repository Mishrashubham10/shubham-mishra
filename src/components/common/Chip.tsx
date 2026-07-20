import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const chipVariants = cva(
  'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium',
  {
    variants: {
      variant: {
        default:
          'border-gray-300 bg-gray-100 text-black dark:bg-gray-800 dark:text-white',
        primary:
          'border-blue-300 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200',
        success: 'border-green-300 bg-green-100 text-green-700',
        warning: 'border-yellow-300 bg-yellow-100 text-yellow-700',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

type ChipProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof chipVariants>;

export function Chip({ className, variant, ...props }: ChipProps) {
  return (
    <span className={cn(chipVariants({ variant }), className)} {...props} />
  );
}