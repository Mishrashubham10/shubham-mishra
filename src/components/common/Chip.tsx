type ChipProps = {
  children: React.ReactNode;
};

export function Chip({ children }: ChipProps) {
  return (
    <span className="rounded-full border-border/60 bg-muted px-3 py-1 text-sm text-muted-foreground hover:bg-primary/10 transition-colors">
      {children}
    </span>
  );
}