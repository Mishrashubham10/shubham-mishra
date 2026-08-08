import type { ProfileTechCategory } from '@/types/portfolio';

import { TechCategory } from './TechCategory';

type TechStackProps = {
  techStack: ProfileTechCategory[];
};

export function TechStack({ techStack }: TechStackProps) {
  return (
    <div className="space-y-8">
      {techStack.map((category) => (
        <TechCategory key={category.category} category={category} />
      ))}
    </div>
  );
}