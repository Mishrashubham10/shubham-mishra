import { SectionHeading } from '@/components/common';
import { DESIGN } from '@/constants/design';
import { CaseStudy } from '@/types/domain';

type ProjectArchProps = {
  project: CaseStudy;
};

export function ProjectArchitecture({ project }: ProjectArchProps) {
  return (
    <section className="py-20">
      <SectionHeading
        badge="System Design"
        title="Architecture"
        description="A high-level overview of how the application's components work together."
      />

      <div className={DESIGN.components.projectArchitecture.wrapper}>
        {project.architecture.map((section, index) => (
          <article
            key={section.id}
            className={DESIGN.components.projectArchitecture.item}
          >
            <div className={DESIGN.components.projectArchitecture.indicator}>
              {index + 1}
            </div>

            {index < project.architecture.length - 1 && (
              <div className={DESIGN.components.projectArchitecture.line} />
            )}

            <h3 className={DESIGN.components.projectArchitecture.title}>
              {section.title}
            </h3>

            <p className={DESIGN.components.projectArchitecture.description}>
              {section.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}