import { personal } from '@/data/personal';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://yesidhernandez.dev';

type Props = { locale: string };

export function JsonLdPerson({ locale }: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personal.name,
    jobTitle: personal.title,
    email: personal.email,
    url: baseUrl,
    sameAs: [personal.github, personal.linkedin],
    description:
      locale === 'es'
        ? 'Desarrollador Fullstack con 6 años de experiencia. Node.js, NestJS, React, Next.js.'
        : 'Fullstack Developer with 6 years of experience. Node.js, NestJS, React, Next.js.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function JsonLdWebSite({ locale }: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${personal.name} - Portfolio`,
    url: baseUrl,
    description:
      locale === 'es'
        ? 'Portfolio de Yesid Hernandez, desarrollador Fullstack.'
        : 'Yesid Hernandez Fullstack Developer portfolio.',
    inLanguage: locale === 'es' ? 'es' : 'en',
    author: {
      '@type': 'Person',
      name: personal.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
