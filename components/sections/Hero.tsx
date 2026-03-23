'use client';

import { useTranslations } from 'next-intl';
import { personal } from '@/data/personal';

export function Hero() {
  const tHero = useTranslations('hero');
  const tAbout = useTranslations('about');

  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-card-border scroll-mt-20"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-grid animate-grid-pan motion-reduce:animate-none pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-accent/6 via-transparent to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-1/2 max-w-xl bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-14">
          {/* Columna izquierda: foto */}
          <div className="flex-shrink-0 lg:w-[280px] xl:w-[320px] animate-fade-up motion-reduce:animate-none">
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-accent/20 to-transparent opacity-60 animate-accent-shimmer motion-reduce:animate-none" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/me.jpg"
                alt={personal.name}
                width={320}
                height={320}
                loading="eager"
                className="relative rounded-2xl object-cover aspect-square w-full max-w-[220px] sm:max-w-[260px] lg:max-w-none border border-card-border shadow-[var(--shadow-card-hover)] ring-2 ring-background/80 transition-transform duration-500 ease-out hover:scale-[1.02] motion-reduce:hover:scale-100"
              />
            </div>
          </div>

          {/* Columna derecha: nombre, rol, acerca de mí */}
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold tracking-widest text-accent uppercase animate-fade-up motion-reduce:animate-none delay-75">
              {tHero('greeting')}
            </p>
            <h1
              id="hero-heading"
              className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl animate-fade-up motion-reduce:animate-none delay-150"
            >
              {personal.name}
            </h1>
            <p className="mt-2 text-lg font-semibold text-foreground sm:text-xl animate-fade-up motion-reduce:animate-none delay-200">
              {tHero('title')}
            </p>
            <p className="mt-3 text-base text-muted font-medium sm:text-lg animate-fade-up motion-reduce:animate-none delay-300">
              {tHero('tagline')}
            </p>

            <div className="mt-8 space-y-4 text-muted leading-relaxed text-base sm:text-lg">
              <p className="animate-fade-up motion-reduce:animate-none delay-500">{tAbout('paragraph1')}</p>
              <p className="animate-fade-up motion-reduce:animate-none delay-700">{tAbout('paragraph2')}</p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 animate-fade-up motion-reduce:animate-none delay-1000">
              <a
                href="#experience"
                className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 hover:opacity-90 hover:shadow-[var(--shadow-glow)] active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background motion-reduce:active:scale-100"
              >
                {tHero('ctaExperience')}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border-2 border-card-border bg-card/60 px-6 py-3.5 text-sm font-semibold text-foreground hover:border-accent/50 hover:bg-card active:scale-[0.98] transition-all duration-200 motion-reduce:active:scale-100"
              >
                {tHero('ctaContact')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
