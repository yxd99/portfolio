'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Retraso al entrar en vista (ms); al salir no hay retardo */
  delayMs?: number;
  rootMargin?: string;
  /** Fracción mínima visible para considerar “en pantalla” (evita parpadeos en bordes) */
  threshold?: number;
};

export function Reveal({
  children,
  className = '',
  delayMs = 0,
  rootMargin = '0px',
  threshold = 0.08,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  /** Tras haber estado en vista al menos una vez: la salida es solo fade, sin “caída” brusca */
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            setHasBeenVisible(true);
          } else {
            setVisible(false);
          }
        });
      },
      { root: null, rootMargin, threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin, threshold]);

  const motionSafe = [
    'motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:pointer-events-auto',
  ];

  const transitionBase = '[transition-property:opacity,transform]';

  let stateClass: string;
  if (visible) {
    stateClass = [
      'pointer-events-auto opacity-100 translate-y-0',
      'duration-700 ease-out',
      transitionBase,
    ].join(' ');
  } else if (hasBeenVisible) {
    // Salida: fade suave, sin desplazamiento vertical (evita sensación de “corte”)
    stateClass = [
      'pointer-events-none opacity-0 translate-y-0',
      'duration-[580ms] ease-in',
      transitionBase,
    ].join(' ');
  } else {
    // Antes del primer reveal: entrada con ligero slide + fade
    stateClass = [
      'pointer-events-none opacity-0 translate-y-8',
      'duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
      transitionBase,
    ].join(' ');
  }

  return (
    <div
      ref={ref}
      className={[...motionSafe, stateClass, className].filter(Boolean).join(' ')}
      style={{
        transitionDelay: visible ? `${delayMs}ms` : '0ms',
      }}
    >
      {children}
    </div>
  );
}
