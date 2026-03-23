'use client';

import { useTranslations } from 'next-intl';
import { useCallback, useEffect, useRef, useState } from 'react';

const DUCK_DEFAULT = '/images/duck.png';

/** Tiempo de la transición CSS del volteo (0.7s) + margen para no revertir con el mismo clic. */
const FLIP_BACK_LOCK_MS = 900;
const FLIP_BACK_LOCK_MS_REDUCED = 320;

type Props = {
  photoSrc: string;
  photoAlt: string;
  duckSrc?: string;
};

/** Dispara en el clic 11 (más de diez). Clic de nuevo vuelve a la foto. */
export function HeroDuckEgg({ photoSrc, photoAlt, duckSrc = DUCK_DEFAULT }: Props) {
  const t = useTranslations('easterEggs.duck');
  const [flipped, setFlipped] = useState(false);
  const [bubbleVisible, setBubbleVisible] = useState(false);
  const countRef = useRef(0);
  const flipBackAllowedRef = useRef(true);

  useEffect(() => {
    if (!flipped) {
      flipBackAllowedRef.current = true;
      setBubbleVisible(false);
      return;
    }

    flipBackAllowedRef.current = false;
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lockMs = reduced ? FLIP_BACK_LOCK_MS_REDUCED : FLIP_BACK_LOCK_MS;
    const lockId = window.setTimeout(() => {
      flipBackAllowedRef.current = true;
    }, lockMs);

    const bubbleDelay = reduced ? 80 : 480;
    const bubbleId = window.setTimeout(() => setBubbleVisible(true), bubbleDelay);

    return () => {
      window.clearTimeout(lockId);
      window.clearTimeout(bubbleId);
    };
  }, [flipped]);

  const handleClick = useCallback(() => {
    if (flipped) {
      if (!flipBackAllowedRef.current) return;
      setFlipped(false);
      return;
    }
    countRef.current += 1;
    if (countRef.current > 10) {
      countRef.current = 0;
      setFlipped(true);
    }
  }, [flipped]);

  const showBubble = flipped && bubbleVisible;

  return (
    <div className="relative w-full max-w-[220px] sm:max-w-[260px] lg:max-w-none">
      <div className="pointer-events-none absolute -inset-2 rounded-2xl bg-gradient-to-br from-accent/20 to-transparent opacity-60 animate-accent-shimmer motion-reduce:animate-none" />

      <div className="relative flex flex-col items-stretch lg:block">
        <button
          type="button"
          onClick={handleClick}
          className="hero-duck-perspective group relative w-full cursor-pointer rounded-2xl border-0 bg-transparent p-0 text-left outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label={flipped ? t('ariaFlipBack') : photoAlt}
        >
          <div
            className={`hero-duck-flip-inner relative aspect-square w-full rounded-2xl shadow-[var(--shadow-card-hover)] ring-2 ring-background/80 ${flipped ? 'hero-duck-flip-inner--flipped' : 'motion-safe:group-hover:scale-[1.02] motion-reduce:group-hover:scale-100'}`}
          >
            <div className="hero-duck-face absolute inset-0 overflow-hidden rounded-2xl border border-card-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photoSrc}
                alt=""
                width={320}
                height={320}
                loading="eager"
                className="h-full w-full object-cover"
                draggable={false}
              />
            </div>
            <div className="hero-duck-face hero-duck-face--back absolute inset-0 overflow-hidden rounded-2xl border border-card-border bg-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={duckSrc}
                alt=""
                width={320}
                height={320}
                className="h-full w-full object-cover object-center"
                draggable={false}
              />
            </div>
          </div>
        </button>

        {flipped ? (
          <div
            className={`comic-bubble relative z-10 mt-4 max-w-[min(100%,16rem)] self-start transition-opacity duration-300 ease-out motion-reduce:transition-none lg:absolute lg:left-[calc(100%+0.85rem)] lg:top-1/2 lg:mt-0 lg:max-w-[15rem] lg:-translate-y-1/2 ${showBubble ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
            aria-hidden={!showBubble}
            aria-live="polite"
            role="status"
          >
            <p className="comic-bubble__body text-sm font-extrabold leading-snug tracking-tight">
              {t('speech')}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
