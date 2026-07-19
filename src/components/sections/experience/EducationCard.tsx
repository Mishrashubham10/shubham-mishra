import { GraduationCap } from 'lucide-react';

import type { Education } from '@/types/portfolio';

type EducationCardProps = {
  education: Education;
};

export default function EducationCard({ education }: EducationCardProps) {
  return (
    <article className="rounded-2xl border bg-card p-6">
      <div className="flex items-start gap-4">
        <div className="rounded-lg border bg-muted p-3">
          <GraduationCap className="h-5 w-5" />
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold">{education.degree}</h3>

          <p className="mt-1 text-muted-foreground">{education.institution}</p>

          {education.location && (
            <p className="mt-1 text-sm text-muted-foreground">
              {education.location}
            </p>
          )}

          <p className="mt-4 text-sm font-medium">
            {education.startDate} — {education.endDate}
          </p>
        </div>
      </div>
    </article>
  );
}