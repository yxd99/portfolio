'use client';

import { useTranslations } from 'next-intl';
import { personal } from '@/data/personal';
import { Reveal } from '@/components/ui/Reveal';

export function PageFooter() {
  const t = useTranslations('footer');
  return (
    <footer className="border-t border-card-border bg-card/30 py-8 text-center text-sm text-muted">
      <Reveal>
        <p>
          © {new Date().getFullYear()} {personal.name}. {t('rights')}
        </p>
      </Reveal>
    </footer>
  );
}
