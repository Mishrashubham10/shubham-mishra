import {
  ProjectArchitecture,
  ProjectChallenges,
  ProjectFeatures,
  ProjectHero,
  ProjectLayout,
  ProjectLearnings,
  ProjectOutcomes,
  ProjectOverview,
  ProjectProblemSolution,
  ProjectRoadmap,
} from '@/components/projects';

import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <ProjectLayout>
      <ProjectHero project={project} />

      <ProjectOverview project={project} />

      <ProjectOutcomes project={project} />

      <ProjectProblemSolution project={project} />

      <ProjectArchitecture project={project} />

      <ProjectFeatures project={project} />

      <ProjectChallenges project={project} />

      <ProjectLearnings project={project} />

      <ProjectRoadmap project={project} />
    </ProjectLayout>
  );
}