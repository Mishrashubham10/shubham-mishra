import type { TechCategory as TechCategoryType } from '@/types/portfolio';
import { TechCategory } from './TechCategory';

type TechStackProps = {
  techStack: TechCategoryType[];
};

export function TechStack({ techStack }: TechStackProps) {
  return (
    <div className="space-y-10">
      {techStack.map((category) => (
        <TechCategory key={category.category} category={category} />
      ))}
    </div>
  );
}