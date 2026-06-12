/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef1f8',
          100: '#d4dcef',
          200: '#a9b8df',
          300: '#7e94cf',
          400: '#5371bf',
          500: '#3a548f',
          600: '#1f3a6e',
          700: '#152a52',
          800: '#0d1b38',
          900: '#070f22',
          950: '#040814',
        },
        gold: {
          50: '#fdf8ed',
          100: '#f9ecc8',
          200: '#f2d98e',
          300: '#ecc65b',
          400: '#e6b53a',
          500: '#d49720',
          600: '#c98a1e',
          700: '#a66b18',
          800: '#85531a',
          900: '#6f4519',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.4)', opacity: '0' },
          '100%': { transform: 'scale(1.4)', opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        shimmer: 'shimmer 4s linear infinite',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
        marquee: 'marquee 28s linear infinite',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #f2d98e 0%, #e6b53a 45%, #c98a1e 100%)',
        'navy-radial': 'radial-gradient(ellipse at top, #152a52 0%, #070f22 70%)',
      },
      boxShadow: {
        gold: '0 10px 40px -10px rgba(230, 181, 58, 0.45)',
        glass: '0 8px 32px 0 rgba(7, 15, 34, 0.37)',
      },
    },
  },
  plugins: [],
}
