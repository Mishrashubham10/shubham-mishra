import Link from 'next/link';

import { ArrowRight, ExternalLink, Github } from 'lucide-react';

import { AppButton } from '@/components/common/AppButton';
import { Badge } from '@/components/common/Badge';
import { Chip } from '@/components/common/Chip';

import { CaseStudy } from '@/types/domain';

type ProjectCardProps = {
  project: CaseStudy;
};

export function ProjectCard({ project }: ProjectCardProps) {
  console.log('Project:', project.title);
  console.log(project.technologies);
  project.technologies.forEach((tech, index) => {
    console.log(index, tech);
  });

  return (
    <article className="group flex h-full flex-col rounded-2xl border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Header */}
      <header className="space-y-5">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold tracking-tight">
              {project.title}
            </h3>

            <p className="text-muted-foreground">{project.tagline}</p>
          </div>

          <Badge>{project.status}</Badge>
        </div>
      </header>

      {/* Overview */}
      <section className="mt-8">
        <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Overview
        </h4>

        <p className="mt-3 leading-7 text-muted-foreground">
          {project.overview}
        </p>
      </section>

      {/* Technologies */}
      <section className="mt-8">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <Chip key={technology.id}>{technology.name}</Chip>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto flex items-center justify-between pt-10">
        <Link href={`/projects/${project.slug}`}>
          <AppButton>
            View Case Study
            <ArrowRight className="h-4 w-4" />
          </AppButton>
        </Link>

        <div className="flex items-center gap-3">
          {project.links.github && (
            <Link
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
            >
              <Github className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
            </Link>
          )}

          {project.links.live && (
            <Link
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Demo"
            >
              <ExternalLink className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
            </Link>
          )}
        </div>
      </footer>
    </article>
  );
}
