import { Chip } from '@/components/common/Chip';
import type { ProfileTechCategory } from '@/types/portfolio';

type TechCategoryProps = {
  category: ProfileTechCategory;
};

export function TechCategory({ category }: TechCategoryProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold">{category.category}</h3>

      <div className="flex flex-wrap gap-2">
        {category.items.map((tech) => (
          <Chip key={tech.name}>{tech.name}</Chip>
        ))}
      </div>
    </div>
  );
}