/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        hueso: '#F2EDE4',
        tinta: '#1C1A17',
        ambar: '#C77A2E',
        'ambar-texto': '#8A4E1E',
        sangre: '#8B2E2E',
        salvia: '#5E6E5A',
        papel: '#FFFFFF',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter Tight"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        none: '0px',
        DEFAULT: '2px',
        full: '9999px',
      },
    },
  },
  plugins: [],
};
