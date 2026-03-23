'use client';

import { useTranslations } from 'next-intl';
import { experience } from '@/data/experience';
import { useLocale } from 'next-intl';
import { Reveal } from '@/components/ui/Reveal';

function formatDate(dateStr: string | null, presentLabel: string) {
  if (!dateStr) return presentLabel;
  const [y, m] = dateStr.split('-');
  if (m) return `${getMonthName(parseInt(m, 10))} ${y}`;
  return y;
}

function getMonthName(month: number): string {
  const names = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return names[month - 1] ?? '';
}

export function ExperienceTimeline() {
  const t = useTranslations('experience');
  const locale = useLocale() as 'en' | 'es';

  return (
    <section
      id="experience"
      className="scroll-mt-20 border-b border-card-border px-4 py-20 sm:px-6 sm:py-24"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 id="experience-heading" className="section-heading section-heading-accent">
            {t('heading')}
          </h2>
        </Reveal>
        <div className="mt-12 flow-root">
          <ul className="-mb-8">
            {experience.map((entry, idx) => (
              <li key={entry.id} className="relative pb-14 last:pb-0">
                {idx < experience.length - 1 && (
                  <span
                    className="absolute left-[15px] top-8 -ml-px h-[calc(100%+1rem)] w-0.5 bg-gradient-to-b from-accent/50 to-card-border"
                    aria-hidden
                  />
                )}
                <Reveal className="flex w-full min-w-0 gap-6" delayMs={idx * 70}>
                  <span
                    className="relative flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white shadow-md shadow-accent/30 ring-2 ring-background transition-transform duration-300 hover:scale-110 motion-reduce:hover:scale-100"
                    aria-hidden
                  >
                    {idx + 1}
                  </span>
                  <div className="min-w-0 flex-1 rounded-xl border border-card-border bg-card p-5 shadow-[var(--shadow-card)] sm:p-6 card-hover">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {entry.role} · {entry.company}
                      </h3>
                      <p className="text-sm font-medium text-muted tabular-nums">
                        {formatDate(entry.startDate, t('present'))} –{' '}
                        {entry.endDate ? formatDate(entry.endDate, t('present')) : t('present')}
                      </p>
                    </div>
                    <p className="mt-3 text-muted text-sm leading-relaxed">
                      {entry.description[locale]}
                    </p>
                    {entry.impacts[locale]?.length > 0 && (
                      <>
                        <p className="mt-4 text-sm font-semibold text-foreground">{t('impacts')}</p>
                        <ul className="mt-2 list-inside space-y-1.5 text-sm text-muted">
                          {entry.impacts[locale].map((impact, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-accent mt-0.5">·</span>
                              <span>{impact}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
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
