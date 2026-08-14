/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        hueso: '#FFF8EC',
        tinta: '#1C1A17',
        ambar: '#C77A2E',
        'ambar-texto': '#8A4E1E',
        sangre: '#8B2E2E',
        salvia: '#5E6E5A',
        papel: '#FFFFFF',
        rosa: '#F2578F',
        'rosa-oscuro': '#C2356A',
        'rosa-claro': '#FCE0EC',
        lima: '#AACC3E',
        'lima-oscuro': '#4F6B1D',
        'lima-claro': '#EDF5CE',
        menta: '#8FE3C4',
        amarillo: '#FFD966',
      },
      fontFamily: {
        display: ['"Fredoka"', '"Baloo 2"', 'sans-serif'],
        body: ['"Nunito"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        none: '0px',
        sm: '0.75rem',
        DEFAULT: '1.5rem',
        lg: '2rem',
        full: '9999px',
      },
      boxShadow: {
        soft: '0 12px 30px -12px rgba(28, 26, 23, 0.18)',
      },
    },
  },
  plugins: [],
};
