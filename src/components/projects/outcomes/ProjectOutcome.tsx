import { SectionHeading } from '@/components/common';
import { DESIGN } from '@/constants/design';
import { CaseStudy, Outcome } from '@/types/domain';

type ProjectOutcomeProps = {
  project: CaseStudy;
};

export function ProjectOutcomes({ project }: ProjectOutcomeProps) {
  return (
    <section className="py-20">
      <SectionHeading
        badge="Results"
        title="Outcomes"
        description="The key results and engineering achievements delivered by this project."
      />

      <div className={DESIGN.components.projectOutcomes.wrapper}>
        {project.outcomes.map((outcome, index) => (
          <article
            key={outcome.id}
            className={DESIGN.components.projectOutcomes.item}
          >
            <span className={DESIGN.components.projectOutcomes.number}>
              {String(index + 1).padStart(2, '0')}
            </span>

            <div className={DESIGN.components.projectOutcomes.content}>
              <h3 className={DESIGN.components.projectOutcomes.title}>
                {outcome.title}
              </h3>

              <p className={DESIGN.components.projectOutcomes.description}>
                {outcome.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}