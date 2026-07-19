type Stat = {
  value: string | number;
  label: string;
};

type HeroStatsProps = {
  stats: Stat[];
};

export function HeroStats({ stats }: HeroStatsProps) {
  return (
    <div className="grid grid-cols-1 gap-8 border-t pt-10 sm:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className="text-4xl font-bold tracking-tight">{stat.value}</p>

          <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}