import { ArrowDown } from 'lucide-react';

import { DESIGN } from '@/constants/design';
import { CaseStudy } from '@/types/domain';
import { SectionHeading } from '@/components/common';
import { Prose } from '@/components/common/RichText/Prose';

type ProjectChallengesProps = {
  project: CaseStudy;
};

export function ProjectChallenges({ project }: ProjectChallengesProps) {
  return (
    <section className="py-20">
      <SectionHeading
        badge="Engineering"
        title="Challenges"
        description="Some of the technical problems encountered and how they were solved."
      />

      <div className={DESIGN.components.projectChallenges.wrapper}>
        {project.challenges.map((challenge, index) => (
          <article
            key={challenge.id}
            className={DESIGN.components.projectChallenges.item}
          >
            <span className={DESIGN.components.projectChallenges.number}>
              Challenge {String(index + 1).padStart(2, '0')}
            </span>

            <div className="mt-6">
              <p className={DESIGN.components.projectChallenges.label}>
                Problem
              </p>

              <div className="mt-3">
                <Prose>{challenge.problem}</Prose>
              </div>
            </div>

            <ArrowDown className={DESIGN.components.projectChallenges.arrow} />

            <div>
              <p className={DESIGN.components.projectChallenges.label}>
                Solution
              </p>

              <div className="mt-3">
                <Prose>{challenge.solution}</Prose>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}