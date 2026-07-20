import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { SectionHeading } from '@/components/common/SectionHeading';

import { featuredProjects } from '@/data/projects';

import { ProjectCard } from './ProjectCard';

export default function Projects() {
  if (!featuredProjects.length) {
    return null;
  }

  return (
    <Section id="projects">
      <Container>
        <SectionHeading
          badge="Projects"
          title="Selected Engineering Work"
          description="A collection of projects focused on solving real-world problems through scalable architecture, clean design, and modern web technologies."
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