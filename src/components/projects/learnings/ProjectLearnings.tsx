import { SectionHeading } from '@/components/common';
import { Prose } from '@/components/common/RichText/Prose';
import { DESIGN } from '@/constants/design';
import { CaseStudy } from '@/types/domain';

type ProjectLearningsProps = {
  project: CaseStudy;
};

export function ProjectLearnings({ project }: ProjectLearningsProps) {
  return (
    <section className="py-20">
      <SectionHeading
        badge="Reflection"
        title="Key Learnings"
        description="The most valuable engineering lessons gained while building this project."
      />

      <div className={DESIGN.components.projectLearnings.wrapper}>
        {project.learnings.map((learning, index) => (
          <article
            key={learning.id}
            className={DESIGN.components.projectLearnings.item}
          >
            <span className={DESIGN.components.projectLearnings.number}>
              {String(index + 1).padStart(2, '0')}
            </span>

            <div className={DESIGN.components.projectLearnings.content}>
              <h3 className={DESIGN.components.projectLearnings.title}>
                {learning.title}
              </h3>

              <Prose>{learning.description}</Prose>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}