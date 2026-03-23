'use client';

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { NextIntlClientProvider } from 'next-intl';
import type { AbstractIntlMessages } from 'next-intl';

export const LOCALE_STORAGE_KEY = 'portfolio.locale';

type AppLocale = 'en' | 'es';

type MessagesByLocale = Record<AppLocale, AbstractIntlMessages>;

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function syncNextLocaleCookie(locale: AppLocale) {
  document.cookie = `NEXT_LOCALE=${locale};path=/;max-age=${COOKIE_MAX_AGE};SameSite=Lax`;
}

const SwitchLocaleContext = createContext<(locale: AppLocale) => void>(() => {});

export function useSwitchLocale() {
  return useContext(SwitchLocaleContext);
}

type Props = {
  children: ReactNode;
  initialLocale: string;
  messagesByLocale: MessagesByLocale;
};

export function ClientIntlProvider({ children, initialLocale, messagesByLocale }: Props) {
  const [locale, setLocale] = useState<AppLocale>(() =>
    initialLocale === 'es' ? 'es' : 'en',
  );

  const switchLocale = useCallback((next: AppLocale) => {
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, next);
    } catch {
      /* private mode / quota */
    }
    syncNextLocaleCookie(next);
    setLocale(next);
  }, []);

  const messages = messagesByLocale[locale];
  const switchFn = useMemo(() => switchLocale, [switchLocale]);

  return (
    <SwitchLocaleContext.Provider value={switchFn}>
      <NextIntlClientProvider locale={locale} messages={messages} timeZone="America/Bogota">
        {children}
      </NextIntlClientProvider>
    </SwitchLocaleContext.Provider>
  );
}
