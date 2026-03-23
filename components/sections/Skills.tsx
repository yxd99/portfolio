'use client';

import { useTranslations } from 'next-intl';
import { skillsByCategory, type SkillCategory } from '@/data/skills';
import { SkillIcon } from '@/components/ui/SkillIcon';
import { Reveal } from '@/components/ui/Reveal';

const categoryKeys: SkillCategory[] = ['backend', 'frontend', 'databases', 'devops', 'tools'];

export function Skills() {
  const t = useTranslations('skills');

  return (
    <section
      id="skills"
      className="scroll-mt-20 border-b border-card-border px-4 py-20 sm:px-6 sm:py-24"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 id="skills-heading" className="section-heading section-heading-accent">
            {t('heading')}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categoryKeys.map((cat, catIdx) => {
            const skills = skillsByCategory[cat];
            if (!skills.length) return null;
            return (
              <Reveal key={cat} delayMs={catIdx * 80}>
                <div className="h-full rounded-xl border border-card-border bg-card p-5 shadow-[var(--shadow-card)] card-hover">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {t(cat)}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2.5" role="list">
                    {skills.map((skill) => (
                      <li
                        key={skill.iconId}
                        className="inline-flex items-center gap-2 rounded-lg border border-card-border bg-background/80 px-3 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:border-accent/30 hover:bg-card hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"
                      >
                        <SkillIcon iconId={skill.iconId} name={skill.name} className="h-4 w-4 flex-shrink-0" />
                        <span>{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
