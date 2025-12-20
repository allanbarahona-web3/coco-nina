import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3f0',
          100: '#e8e4de',
          200: '#d4cac0',
          300: '#bba99a',
          400: '#a58d7a',
          500: '#8b7355',
          600: '#7a6349',
          700: '#655141',
          800: '#544439',
          900: '#473931',
        },
        accent: {
          50: '#faf5f0',
          100: '#f2e7d9',
          200: '#e5d0b3',
          300: '#d4b28a',
          400: '#c39667',
          500: '#b07647',
          600: '#9d5e3c',
          700: '#834c33',
          800: '#6d3f2e',
          900: '#5c3628',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.9' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
