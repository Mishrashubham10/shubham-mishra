import type { ComponentProps, ReactNode } from 'react';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';

type AppButtonProps = ComponentProps<typeof Button> & {
  href?: string;
  download?: boolean;
  loading?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
};

export function AppButton({
  href,
  download = false,
  loading = false,
  startIcon,
  endIcon,
  children,
  disabled,
  ...props
}: AppButtonProps) {
  const isDisabled = disabled || loading;
  const isExternal = href?.startsWith('http');

  const content = (
    <>
      {loading ? <Loader2 className="size-4 animate-spin" /> : startIcon}
      {children}
      {!loading && endIcon}
    </>
  );

  // Disabled buttons should never navigate
  if (href && isDisabled) {
    return (
      <Button disabled {...props}>
        {content}
      </Button>
    );
  }

  // Download links
  if (href && download) {
    return (
      <Button asChild {...props}>
        <a href={href} download>
          {content}
        </a>
      </Button>
    );
  }

  // Internal & External links
  if (href) {
    return (
      <Button asChild {...props}>
        <Link
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
        >
          {content}
        </Link>
      </Button>
    );
  }

  // Regular button
  return (
    <Button disabled={isDisabled} {...props}>
      {content}
    </Button>
  );
}