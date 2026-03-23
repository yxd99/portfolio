'use client';

import { useTranslations } from 'next-intl';
import { useCallback, useEffect, useRef, useState } from 'react';
import { PORTFOLIO_EGG_LOGO_EVENT } from '@/components/easter-eggs/egg-events';

const KONAMI = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
] as const;

const KONAMI_CLASS = 'egg-konami';
const LOGO_CLICKS = 6;

type Toast = { id: number; message: string } | null;

export function PortfolioEasterEggs() {
  const t = useTranslations('easterEggs');
  const [toast, setToast] = useState<Toast>(null);
  const konamiIndex = useRef(0);
  const logoClicks = useRef(0);
  const toastId = useRef(0);
  const konamiActive = useRef(false);

  const showToast = useCallback((message: string) => {
    toastId.current += 1;
    const id = toastId.current;
    setToast({ id, message });
    window.setTimeout(() => {
      setToast((cur) => (cur?.id === id ? null : cur));
    }, 4500);
  }, []);

  useEffect(() => {
    const style1 = 'color:#3b82f6;font-weight:bold;font-size:13px;';
    const style2 = 'color:#64748b;font-size:12px;';
    // eslint-disable-next-line no-console
    console.log('%cYH · portfolio%c\nIf you are reading this, you passed the vibe check.', style1, style2);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const expected = KONAMI[konamiIndex.current];
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      const match =
        expected === 'b' || expected === 'a'
          ? key === expected
          : e.key === expected;

      if (match) {
        konamiIndex.current += 1;
        if (konamiIndex.current >= KONAMI.length) {
          konamiIndex.current = 0;
          const root = document.documentElement;
          konamiActive.current = !konamiActive.current;
          if (konamiActive.current) {
            root.classList.add(KONAMI_CLASS);
            showToast(t('konamiOn'));
          } else {
            root.classList.remove(KONAMI_CLASS);
            showToast(t('konamiOff'));
          }
        }
      } else {
        konamiIndex.current = 0;
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [showToast, t]);

  useEffect(() => {
    const onLogoTap = () => {
      logoClicks.current += 1;
      if (logoClicks.current >= LOGO_CLICKS) {
        logoClicks.current = 0;
        showToast(t('logoRpg'));
      }
    };
    window.addEventListener(PORTFOLIO_EGG_LOGO_EVENT, onLogoTap);
    return () => window.removeEventListener(PORTFOLIO_EGG_LOGO_EVENT, onLogoTap);
  }, [showToast, t]);

  return (
    <div
      aria-live="polite"
      className="pointer-events-none fixed bottom-6 left-1/2 z-[100] w-[min(100%-2rem,28rem)] -translate-x-1/2"
    >
      {toast ? (
        <div
          className="pointer-events-auto rounded-xl border border-card-border bg-card/95 px-4 py-3 text-sm text-foreground shadow-[var(--shadow-card-hover)] backdrop-blur-md motion-safe:animate-fade-up"
          role="status"
        >
          <p className="leading-relaxed">{toast.message}</p>
          <button
            type="button"
            onClick={() => setToast(null)}
            className="mt-2 text-xs font-semibold text-accent hover:underline"
          >
            {t('toastDismiss')}
          </button>
        </div>
      ) : null}
    </div>
  );
}

