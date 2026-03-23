import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/routing';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'easterEggs' });
  return {
    title: t('eggPage.title'),
    robots: { index: false, follow: false },
  };
}

export default async function EggPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'easterEggs' });

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col justify-center px-4 py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">{t('eggPage.kicker')}</p>
      <h1 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{t('eggPage.title')}</h1>
      <p className="mt-6 text-muted leading-relaxed">{t('eggPage.body')}</p>
      <Link
        href="/"
        className="mt-10 inline-flex justify-center rounded-xl border-2 border-card-border bg-card/80 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/50"
      >
        {t('eggPage.back')}
      </Link>
    </div>
  );
}
