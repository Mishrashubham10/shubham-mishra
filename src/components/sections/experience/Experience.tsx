import { Container, Section, SectionHeading } from '@/components/common';
import { Career } from '@/types/portfolio';

import ExperienceCard from './ExperienceCard';
import EducationCard from './EducationCard';

type ExperienceProps = {
  career: Career;
};

export default function Experience({ career }: ExperienceProps) {
  return (
    <Section id="experience">
      <Container>
        <SectionHeading
          title="Experience"
          description="A journey of building scalable products, collaborating with cross-functional teams, and continuously growing as a software engineer."
        />

        {/* =========== PROFESSIONAL EXP =========== */}
        <div className="mt-16 space-y-8">
          {career.experiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>

        {/* ============ EDUCATION ========== */}
        <div className="mt-20">
          <SectionHeading
            title="Education"
            description="The academic foundation that started my software engineering journey."
          />

          <div className="mt-10 space-y-6">
            {career.education.map((edu) => (
              <EducationCard key={edu.id} education={edu} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}