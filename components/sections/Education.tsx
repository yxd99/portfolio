'use client';

import { useTranslations } from 'next-intl';
import { education } from '@/data/education';
import { useLocale } from 'next-intl';
import { Reveal } from '@/components/ui/Reveal';

export function Education() {
  const t = useTranslations('education');
  const locale = useLocale() as 'en' | 'es';

  return (
    <section
      id="education"
      className="scroll-mt-20 border-b border-card-border px-4 py-20 sm:px-6 sm:py-24"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 id="education-heading" className="section-heading section-heading-accent">
            {t('heading')}
          </h2>
        </Reveal>
        <div className="mt-12 flow-root">
          <ul className="-mb-8">
            {education.map((entry, idx) => (
              <li key={entry.id} className="relative pb-14 last:pb-0">
                {idx < education.length - 1 && (
                  <span
                    className="absolute left-[15px] top-8 -ml-px h-[calc(100%+1rem)] w-0.5 bg-gradient-to-b from-accent/50 to-card-border"
                    aria-hidden
                  />
                )}
                <Reveal className="flex w-full min-w-0 gap-6" delayMs={idx * 70}>
                  <span
                    className="relative flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent/90 text-sm font-semibold text-white shadow-md shadow-accent/20 ring-2 ring-background transition-transform duration-300 hover:scale-110 motion-reduce:hover:scale-100"
                    aria-hidden
                  >
                    {idx + 1}
                  </span>
                  <div className="min-w-0 flex-1 rounded-xl border border-card-border bg-card p-5 shadow-[var(--shadow-card)] sm:p-6 card-hover">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {entry.degree[locale]}
                      </h3>
                      <p className="text-sm font-medium text-muted tabular-nums">
                        {entry.startYear} – {entry.endYear}
                      </p>
                    </div>
                    <p className="mt-1 text-muted text-sm">{entry.institution}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
