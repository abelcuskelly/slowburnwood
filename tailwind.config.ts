import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx,mdx}',
    './pages/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'earth-dark': 'var(--color-earth-dark)',
        'earth-medium': 'var(--color-earth-medium)',
        'earth-light': 'var(--color-earth-light)',
        bone: 'var(--color-bone)',
        'flame-primary': 'var(--color-flame-primary)',
        'flame-accent': 'var(--color-flame-accent)',
        smoke: 'var(--color-smoke)',
        ash: 'var(--color-ash)'
      }
    }
  },
  plugins: []
};

export default config;


