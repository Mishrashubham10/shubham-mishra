import { SectionHeading } from '@/components/common';
import { Prose } from '@/components/common/RichText/Prose';
import { CaseStudy } from '@/types/domain';

type ProjectOverviwProps = {
  project: CaseStudy;
};

export function ProjectOverview({ project }: ProjectOverviwProps) {
  const paragraphs = project.overview.split('\n\n').filter(Boolean);

  return (
    <section className="py-20">
      <SectionHeading badge="Introduction" title="Overview" />

      <Prose>{project.overview}</Prose>
    </section>
  );
}