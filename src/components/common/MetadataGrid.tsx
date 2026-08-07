import { DESIGN } from '@/constants/design';
import { cn } from '@/lib/utils';

type MetadataItem = {
  label: string;
  value: string;
};

type MetadataGridProps = {
  items: MetadataItem[];
  columns?: 2 | 3 | 4;
  className?: string;
};

const columnClasses = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
};

export default function MetadataGrid({
  items,
  columns = 4,
  className,
}: MetadataGridProps) {
  return (
    <div
      className={cn(
        DESIGN.components.metadataGrid.wrapper,
        columnClasses[columns],
        className,
      )}
    >
      {items.map((item) => (
        <div className={DESIGN.components.metadataGrid.card} key={item.label}>
          <p className={DESIGN.components.metadataGrid.label}>{item.label}</p>

          <p className={DESIGN.components.metadataGrid.value}>{item.value}</p>
        </div>
      ))}
    </div>
  );
}