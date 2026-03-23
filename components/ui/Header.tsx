'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useSwitchLocale } from '@/components/i18n/ClientIntlProvider';

const navLinks = [
  { key: 'about', href: '#about' },
  { key: 'experience', href: '#experience' },
  { key: 'education', href: '#education' },
  { key: 'skills', href: '#skills' },
  { key: 'contact', href: '#contact' },
] as const;

export function Header() {
  const t = useTranslations('nav');
  const locale = useLocale() as 'en' | 'es';
  const nextLocale = locale === 'en' ? 'es' : 'en';
  const switchLocale = useSwitchLocale();

  const handleLocaleSwitch = () => {
    switchLocale(nextLocale);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-card-border bg-background/85 backdrop-blur-xl animate-header-in motion-reduce:animate-none">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-8">
        <Link
          href="/"
          className="text-lg font-bold text-foreground hover:text-accent transition-colors duration-200 tracking-tight"
        >
          YH
        </Link>
        <nav className="flex items-center gap-6 sm:gap-8" aria-label="Main navigation">
          {navLinks.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="relative text-sm font-medium text-muted hover:text-foreground transition-colors duration-200 after:absolute after:left-0 after:bottom-[-2px] after:h-px after:w-0 after:bg-accent after:transition-all after:duration-200 hover:after:w-full"
            >
              {t(key)}
            </a>
          ))}
          <button
            type="button"
            onClick={handleLocaleSwitch}
            className="rounded-xl border border-card-border bg-card/80 px-3.5 py-2 text-sm font-semibold text-foreground hover:bg-card hover:border-accent/40 transition-all duration-200"
            aria-label={nextLocale === 'es' ? 'Cambiar a español' : 'Switch to English'}
          >
            {nextLocale.toUpperCase()}
          </button>
        </nav>
      </div>
    </header>
  );
}
