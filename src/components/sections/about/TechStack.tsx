import {
  TechnologyCategory,
} from '@/types/domain';
import type {
  Technology,
} from '@/types/domain';

import { TechCategory } from './TechCategory';

type TechStackProps = {
  techStack: Technology[];
};

export function TechStack({ techStack }: TechStackProps) {
  const categories = Object.values(TechnologyCategory);

  const groupedCategories = categories
    .map((category) => ({
      category,
      items: techStack.filter((technology) => technology.category === category),
    }))
    .filter((category) => category.items.length > 0);

  return (
    <div className="space-y-8">
      {groupedCategories.map((category) => (
        <TechCategory key={category.category} category={category} />
      ))}
    </div>
  );
}