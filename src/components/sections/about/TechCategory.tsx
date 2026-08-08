import { Chip } from '@/components/common/Chip';
import type { TechCategory as TechCategoryType } from '@/types/domain';

type TechCategoryProps = {
  category: TechCategoryType;
};

export function TechCategory({ category }: TechCategoryProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold tracking-tight">{category.category}</h3>

      <div className="flex flex-wrap gap-2">
        {category.items.map((tech) => (
          <Chip key={tech.name}>{tech.name}</Chip>
        ))}
      </div>
    </div>
  );
}