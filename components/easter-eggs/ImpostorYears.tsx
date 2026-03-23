'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';

const MAX = 100;
const TICK_MS = 420;

export function ImpostorYears({ children }: { children: React.ReactNode }) {
  const t = useTranslations('easterEggs.impostor');
  const [count, setCount] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const start = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setCount((c) => {
        const next = c + 1;
        if (next >= MAX) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          return MAX;
        }
        return next;
      });
    }, TICK_MS);
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setCount(0);
  };

  return (
    <span
      className="relative inline cursor-help"
      onMouseEnter={start}
      onMouseLeave={stop}
      aria-label={t('ariaYears')}
    >
      {children}
      {count > 0 ? (
        <span
          className="pointer-events-none absolute left-0 top-full z-20 mt-1.5 max-w-[min(100vw-2rem,16rem)] whitespace-normal rounded-lg border border-card-border bg-card px-2 py-1.5 text-xs font-medium leading-snug text-accent shadow-lg"
          role="status"
        >
          {count >= MAX ? t('maxed') : t('level', { n: count })}
        </span>
      ) : null}
    </span>
  );
}
