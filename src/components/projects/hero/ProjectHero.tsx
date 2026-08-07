import { Container } from '@/components/common';
import { Badge } from '@/components/common/Badge';
import { TechStack } from '@/components/common/TechStack';

import { CaseStudy } from '@/types/domain';
import { HeroActions } from './ProjectHeroActions';
import MetadataGrid from '@/components/common/MetadataGrid';
import { HeroCover } from './ProjectHeroCover';

type HeroProps = {
  project: CaseStudy;
};

export function ProjectHero({ project }: HeroProps) {
  const cover =
    project.screenshots.find((image) => image.featured) ??
    project.screenshots[0];

  return (
    <>
      <section className="relative py-24 lg:py-32">
        <Container>
          <div className="space-y-12">
            <div className="space-y-8">
              <Badge>{project.status}</Badge>

              <div className="max-w-4xl space-y-5">
                <h1 className="text-5xl font-bold tracking-tight lg:text-7xl">
                  {project.title}
                </h1>

                <p className="text-xl leading-8 text-muted-foreground">
                  {project.tagline}
                </p>
              </div>

              <TechStack
                technologies={project.technologies.filter(
                  (technology) => technology.featured,
                )}
              />

              <HeroActions
                github={project.links.github}
                live={project.links.live}
              />

              <MetadataGrid items={project.metadata} />
            </div>

            {cover && <HeroCover src={cover.src} alt={cover.alt} />}
          </div>
        </Container>
      </section>
    </>
  );
}