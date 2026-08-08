import { About } from '@/components/sections/about/About';
import { Experience } from '@/components/sections/experience';
import { Hero } from '@/components/sections/hero/Hero';
import { Projects } from '@/components/sections/projects';
import { portfolio } from '@/data/portfolio';

export default function Home() {
  return (
    <main>
      {/* ============= HERO ============= */}
      <Hero profile={portfolio.profile} projects={portfolio.projects} />

      {/* ============= ABOUT ME ============= */}
      <About profile={portfolio.profile} />

      {/* ============= EXPERIENCE ============= */}
      <Experience career={portfolio.career} />

      {/* ============= PROJECTS ============= */}
      <Projects projects={portfolio.projects} />
    </main>
  );
}