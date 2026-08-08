import { Container, Section, SectionHeading } from '@/components/common';

import type { CaseStudy } from '@/types/domain';

import { ProjectCard } from './ProjectCard';

type ProjectsProps = {
  projects: CaseStudy[];
};

export function Projects({ projects }: ProjectsProps) {
  const featuredProjects = projects.filter((project) => project.featured);

  if (!featuredProjects.length) {
    return null;
  }

  return (
    <Section id="projects">
      <Container>
        <SectionHeading
          badge="Selected Work"
          title="Projects"
          description="A selection of projects I've designed and built while exploring different areas of full-stack engineering."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}