import { Hero } from '@/components/sections/Hero';
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline';
import { Education } from '@/components/sections/Education';
import { Skills } from '@/components/sections/Skills';
import { Contact } from '@/components/sections/Contact';
import { PageFooter } from '@/components/ui/PageFooter';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ExperienceTimeline />
      <Education />
      <Skills />
      <Contact />
      <PageFooter />
    </>
  );
}
