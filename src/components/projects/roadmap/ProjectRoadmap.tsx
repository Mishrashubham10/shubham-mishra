import { SectionHeading } from '@/components/common';
import { DESIGN } from '@/constants/design';
import { cn } from '@/lib/utils';
import { CaseStudy } from '@/types/domain';

type ProjectRoadmapType = {
  project: CaseStudy;
};

export function ProjectRoadmap({ project }: ProjectRoadmapType) {
  return (
    <section className="py-20">
      <SectionHeading
        badge="Future"
        title="Roadmap"
        description="Planned improvements and future iterations for the project."
      />

      <div className={DESIGN.components.projectRoadmap.wrapper}>
        {project.roadmap.map((item) => (
          <article
            key={item.id}
            className={DESIGN.components.projectRoadmap.item}
          >
            <div
              className={cn(
                item.completed
                  ? DESIGN.components.projectRoadmap.indicatorCompleted
                  : DESIGN.components.projectRoadmap.indicatorPlanned,
              )}
            />

            <div className={DESIGN.components.projectRoadmap.content}>
              <p className={DESIGN.components.projectRoadmap.version}>
                {item.version}
              </p>

              <h3 className={DESIGN.components.projectRoadmap.title}>
                {item.title}
              </h3>

              <p className={DESIGN.components.projectRoadmap.description}>
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}