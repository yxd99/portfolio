'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useSwitchLocale } from '@/components/i18n/ClientIntlProvider';
import { dispatchLogoEggTap } from '@/components/easter-eggs/egg-events';
import { useCallback, useEffect, useId, useState } from 'react';

const navLinks = [
  { key: 'about', href: '#about' },
  { key: 'experience', href: '#experience' },
  { key: 'education', href: '#education' },
  { key: 'skills', href: '#skills' },
  { key: 'contact', href: '#contact' },
] as const;

const localeBtnClass =
  'rounded-xl border border-card-border bg-card/80 px-3.5 py-2 text-sm font-semibold text-foreground hover:bg-card hover:border-accent/40 transition-all duration-200 min-h-[44px] min-w-[44px] inline-flex items-center justify-center';

function MenuGlyph({ open }: { open: boolean }) {
  return (
    <svg
      className="h-6 w-6 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" />
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  );
}

export function Header() {
  const t = useTranslations('nav');
  const locale = useLocale() as 'en' | 'es';
  const nextLocale = locale === 'en' ? 'es' : 'en';
  const switchLocale = useSwitchLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const panelId = useId();

  const handleLocaleSwitch = () => {
    switchLocale(nextLocale);
  };

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-card-border bg-background/85 backdrop-blur-xl animate-header-in motion-reduce:animate-none">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-3 px-4 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:px-8 sm:pl-[max(2rem,env(safe-area-inset-left))] sm:pr-[max(2rem,env(safe-area-inset-right))]">
        <Link
          href="/"
          onClick={() => dispatchLogoEggTap()}
          className="text-lg font-bold text-foreground hover:text-accent transition-colors duration-200 tracking-tight shrink-0"
        >
          YH
        </Link>

        <div className="flex flex-1 items-center justify-end gap-2 min-w-0">
          <button
            type="button"
            onClick={handleLocaleSwitch}
            className={`${localeBtnClass} md:hidden shrink-0`}
            aria-label={nextLocale === 'es' ? 'Cambiar a español' : 'Switch to English'}
          >
            {nextLocale.toUpperCase()}
          </button>

          <button
            type="button"
            className="inline-flex md:hidden min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-card-border bg-card/80 text-foreground hover:bg-card hover:border-accent/40 transition-all duration-200"
            aria-expanded={menuOpen}
            aria-controls={panelId}
            aria-label={menuOpen ? t('closeMenu') : t('openMenu')}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <MenuGlyph open={menuOpen} />
          </button>

          <nav
            className="hidden md:flex items-center gap-6 lg:gap-8 shrink-0"
            aria-label={t('ariaMain')}
          >
            {navLinks.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                className="relative text-sm font-medium text-muted hover:text-foreground transition-colors duration-200 after:absolute after:left-0 after:bottom-[-2px] after:h-px after:w-0 after:bg-accent after:transition-all after:duration-200 hover:after:w-full py-2"
              >
                {t(key)}
              </a>
            ))}
            <button
              type="button"
              onClick={handleLocaleSwitch}
              className={localeBtnClass}
              aria-label={nextLocale === 'es' ? 'Cambiar a español' : 'Switch to English'}
            >
              {nextLocale.toUpperCase()}
            </button>
          </nav>
        </div>
      </div>

      {menuOpen ? (
        <>
          <button
            type="button"
            className="fixed inset-0 top-16 z-40 bg-black/55 backdrop-blur-[2px] md:hidden motion-safe:animate-fade-in"
            aria-label={t('closeMenu')}
            onClick={closeMenu}
          />
          <nav
            id={panelId}
            className="fixed left-0 right-0 top-16 z-50 max-h-[min(70vh,calc(100dvh-4rem))] overflow-y-auto overscroll-contain border-b border-card-border bg-background/95 backdrop-blur-xl shadow-lg shadow-black/20 md:hidden motion-safe:animate-fade-in"
            aria-label={t('ariaMain')}
          >
            <ul className="flex flex-col px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-8">
              {navLinks.map(({ key, href }) => (
                <li key={key}>
                  <a
                    href={href}
                    className="block rounded-lg px-3 py-3.5 text-base font-medium text-foreground hover:bg-card hover:text-accent transition-colors"
                    onClick={closeMenu}
                  >
                    {t(key)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </>
      ) : null}
    </header>
  );
}
