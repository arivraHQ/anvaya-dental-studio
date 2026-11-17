/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F7F2EA',
        surface: '#EFE7DA',
        text: '#1F2A24',
        primary: {
          DEFAULT: '#1F4D3F',
          dark: '#16382E',
          light: '#2B6353',
        },
        accent: {
          DEFAULT: '#C8643C',
          dark: '#B0532E',
          light: '#D97953',
        },
        muted: '#8A8F86',
        border: 'rgba(31, 42, 36, 0.12)',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'serif'],
        sans: ['var(--font-instrument)', 'sans-serif'],
      },
      borderRadius: {
        image: '20px',
        pill: '999px',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
}
