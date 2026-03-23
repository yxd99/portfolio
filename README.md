# Portfolio – Yesid Hernandez

Landing page portfolio: Full Stack Developer, bilingüe (EN/ES), SEO-friendly y preparada para Vercel.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **next-intl** (i18n EN/ES)
- Iconos vía [Simple Icons CDN](https://cdn.simpleicons.org)

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). El idioma se guarda en cookie (la URL siempre es `/`).

**Si la web no carga o ves errores "EMFILE: too many open files":**

1. Limpia la caché y vuelve a construir: `rm -rf .next && npm run build`
2. Sube el límite de archivos abiertos y arranca el servidor en la misma terminal:
   ```bash
   ulimit -n 10240
   npm run dev
   ```
   Para que sea permanente en tu sesión, añade `ulimit -n 10240` a tu `~/.zshrc` (o `~/.bashrc`).

## Build

```bash
npm run build
npm start
```

## Despliegue en Vercel

1. Conecta el repositorio a [Vercel](https://vercel.com).
2. (Opcional) Configura la variable de entorno `NEXT_PUBLIC_SITE_URL` con tu dominio (ej. `https://yesidhernandez.dev`) para metadata y sitemap.
3. Deploy. Vercel detecta Next.js y usa el build por defecto.

## Estructura de contenido

- **Datos personales y redes**: [`data/personal.ts`](data/personal.ts)
- **Experiencia laboral (timeline)**: [`data/experience.ts`](data/experience.ts) — edita entradas y añade impactos; puedes pasar la info y refinar textos.
- **Skills e iconos**: [`data/skills.ts`](data/skills.ts) — cada skill usa un `iconId` (slug de [simpleicons.org](https://simpleicons.org)).
- **Textos traducidos**: [`messages/en.json`](messages/en.json) y [`messages/es.json`](messages/es.json).

## SEO

- Metadata por idioma (title, description, Open Graph, Twitter, hreflang).
- JSON-LD (Person, WebSite).
- `sitemap.xml` y `robots.txt` generados en `/sitemap.xml` y `/robots.txt`.

## Licencia

Privado / uso personal.
