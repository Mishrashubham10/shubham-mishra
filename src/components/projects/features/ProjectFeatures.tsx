import { SectionHeading } from '@/components/common';
import { DESIGN } from '@/constants/design';
import { CaseStudy } from '@/types/domain';
import { CheckCircle2 } from 'lucide-react';

type ProjectFeaturesProps = {
  project: CaseStudy;
};

export function ProjectFeatures({ project }: ProjectFeaturesProps) {
  return (
    <section className="py-20">
      <SectionHeading
        badge="Capabilities"
        title="Features"
        description="The core functionality delivered by this application."
      />

      <div className={DESIGN.components.projectFeatures.wrapper}>
        {project.features.map((feature) => (
          <article
            key={feature.id}
            className={DESIGN.components.projectFeatures.item}
          >
            <CheckCircle2 className={DESIGN.components.projectFeatures.icon} />

            <div className={DESIGN.components.projectFeatures.content}>
              <h3 className={DESIGN.components.projectFeatures.title}>
                {feature.title}
              </h3>

              <p className={DESIGN.components.projectFeatures.description}>
                {feature.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}