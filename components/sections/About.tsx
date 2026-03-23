'use client';

import { useTranslations } from 'next-intl';

export function About() {
  const t = useTranslations('about');

  return (
    <section
      id="about"
      className="scroll-mt-20 border-b border-card-border px-4 py-20 sm:px-6 sm:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-3xl">
        <h2 id="about-heading" className="section-heading section-heading-accent">
          {t('heading')}
        </h2>
        <div className="mt-8 space-y-6 text-muted leading-relaxed text-base sm:text-lg">
          <p>{t('paragraph1')}</p>
          <p>{t('paragraph2')}</p>
        </div>
      </div>
    </section>
  );
}
