import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        accent: 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',
        card: 'var(--card)',
        'card-border': 'var(--card-border)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(1.15rem)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'header-in': {
          from: { opacity: '0', transform: 'translateY(-0.6rem)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'grid-pan': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '64px 64px' },
        },
        'accent-shimmer': {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.85' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.65s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.5s ease-out both',
        'header-in': 'header-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both',
        'grid-pan': 'grid-pan 90s linear infinite',
        'accent-shimmer': 'accent-shimmer 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
