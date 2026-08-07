import { SectionHeading } from '@/components/common';
import { Prose } from '@/components/common/RichText/Prose';
import { DESIGN } from '@/constants/design';
import { CaseStudy } from '@/types/domain';

type ProjectProblemSolutionProps = {
  project: CaseStudy;
};

export function ProjectProblemSolution({
  project,
}: ProjectProblemSolutionProps) {
  return (
    <section className="py-20">
      <SectionHeading
        badge="Challenge"
        title="Problem & Solution"
        description="The engineering problem and the approach used to solve it."
      />

      <div className={DESIGN.components.projectProblemSolution.wrapper}>
        <div className={DESIGN.components.projectProblemSolution.column}>
          <span className={DESIGN.components.projectProblemSolution.label}>
            Problem
          </span>

          <Prose>{project.problem}</Prose>
        </div>

        <div className={DESIGN.components.projectProblemSolution.column}>
          <span className={DESIGN.components.projectProblemSolution.label}>
            Solution
          </span>

          <Prose>{project.solution}</Prose>
        </div>
      </div>
    </section>
  );
}