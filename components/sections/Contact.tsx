'use client';

import { useTranslations } from 'next-intl';
import { personal } from '@/data/personal';
import { useCallback, useState } from 'react';
import { Reveal } from '@/components/ui/Reveal';

export function Contact() {
  const t = useTranslations('contact');
  const [copied, setCopied] = useState(false);

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText(personal.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  return (
    <section
      id="contact"
      className="scroll-mt-20 px-4 py-20 sm:px-6 sm:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <h2 id="contact-heading" className="section-heading section-heading-accent-center">
            {t('heading')}
          </h2>
        </Reveal>
        <Reveal delayMs={80}>
          <p className="mt-4 text-muted text-lg">{t('subheading')}</p>
        </Reveal>
        <Reveal delayMs={140}>
          <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-card-border bg-card/80 px-5 py-2.5 text-sm font-semibold text-foreground transition-all duration-200 hover:border-accent/50 hover:bg-card active:scale-[0.98] motion-reduce:active:scale-100"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-card-border bg-card/80 px-5 py-2.5 text-sm font-semibold text-foreground transition-all duration-200 hover:border-accent/50 hover:bg-card active:scale-[0.98] motion-reduce:active:scale-100"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 rounded-xl border-2 border-card-border bg-card/80 px-5 py-2.5 text-sm font-semibold text-foreground transition-all duration-200 hover:border-accent/50 hover:bg-card active:scale-[0.98] motion-reduce:active:scale-100"
            >
              Email
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all duration-200 hover:opacity-90 hover:shadow-[var(--shadow-glow)] active:scale-[0.98] motion-reduce:active:scale-100"
            >
              {copied ? t('emailCopied') : t('copyEmail')}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
