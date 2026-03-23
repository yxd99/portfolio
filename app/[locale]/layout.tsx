import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import { ClientIntlProvider } from '@/components/i18n/ClientIntlProvider';
import { Header } from '@/components/ui/Header';
import { JsonLdPerson, JsonLdWebSite } from '@/components/seo/JsonLd';
import { SetHtmlLang } from '@/components/seo/SetHtmlLang';
import { personal } from '@/data/personal';
import enMessages from '@/messages/en.json';
import esMessages from '@/messages/es.json';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://yesidhernandez.dev';

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  const title = `${personal.name} | ${personal.title}`;
  const description = isEn
    ? 'Mid Full Stack Developer with 6 years of experience. Node.js, NestJS, React, Next.js. Backend-oriented, scalable systems.'
    : 'Desarrollador Full Stack con 6 años de experiencia. Node.js, NestJS, React, Next.js. Sistemas escalables orientados al backend.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: baseUrl,
      siteName: personal.name,
      locale: locale === 'es' ? 'es_CO' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: baseUrl,
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ClientIntlProvider
      initialLocale={locale}
      messagesByLocale={{ en: enMessages, es: esMessages }}
    >
      <SetHtmlLang />
      <JsonLdPerson locale={locale} />
      <JsonLdWebSite locale={locale} />
      <Header />
      <main className="min-h-screen">{children}</main>
    </ClientIntlProvider>
  );
}
