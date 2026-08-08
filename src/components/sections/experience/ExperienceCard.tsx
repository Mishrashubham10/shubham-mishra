import { Check } from 'lucide-react';

import { CareerExperience } from '@/types/domain';
import { Chip } from '@/components/common/Chip';

type ExperienceCardProps = {
  experience: CareerExperience;
};

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="rounded-2xl border bg-card p-8 transition-colors hover:border-primary/30">
      {/* Header */}
      <header className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">
            {experience.role}
          </h3>

          <p className="mt-1 text-lg text-muted-foreground">
            {experience.company}
          </p>

          <p className="mt-3 text-sm text-muted-foreground">
            {experience.employmentType} • {experience.location}
          </p>
        </div>

        <div className="text-left md:text-right">
          <p className="font-medium">
            {experience.startDate} — {experience.endDate}
          </p>
        </div>
      </header>

      {/* Overview */}
      <section className="mt-8 border-t border-border/50 pt-8">
        <p className="leading-8 text-muted-foreground">{experience.overview}</p>
      </section>

      {/* Key Contributions */}
      <section className="mt-8 border-t border-border/50 pt-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Key Contributions
        </p>

        <ul className="mt-5 space-y-4">
          {experience.contributions.map((contribution) => (
            <li key={contribution} className="flex items-start gap-3">
              <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />

              <span className="leading-7 text-muted-foreground">
                {contribution}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Technologies */}
      <section className="mt-8 border-t border-border/50 pt-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Technologies
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {experience.technologies.map((technology, index) => {
            if (!technology) {
              console.error(
                `Technology at index ${index} is undefined`,
                experience,
              );

              return (
                <Chip key={index} variant="warning">
                  Missing Technology
                </Chip>
              );
            }

            return <Chip key={technology.id}>{technology.name}</Chip>;
          })}
        </div>
      </section>
    </article>
  );
}