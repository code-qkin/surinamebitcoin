/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:        '#050a0e',
        bg2:       '#0a1520',
        bg3:       '#0f1e2e',
        primary:   '#eb06f9',
        secondary: '#2D9CDB',
        accent:    '#00ff88',
        muted:     '#7a9bb5',
        text:      '#eaf2ff',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body:    ['var(--font-body)',    'sans-serif'],
      },
      keyframes: {
        shimmer:  { '0%': { backgroundPosition: '0%' },   '100%': { backgroundPosition: '200%' } },
        marquee:  { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        pulse:    { '0%,100%': { opacity: '1', transform: 'scale(1)' }, '50%': { opacity: '.5', transform: 'scale(1.5)' } },
        fadeInUp: { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        glow:     { '0%,100%': { boxShadow: '0 0 20px rgba(235,6,249,0.3)' }, '50%': { boxShadow: '0 0 60px rgba(235,6,249,0.7)' } },
        float:    { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-20px)' } },
      },
      animation: {
        shimmer:  'shimmer 3s linear infinite',
        marquee:  'marquee 22s linear infinite',
        pulse:    'pulse 2s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.6s ease forwards',
        glow:     'glow 3s ease-in-out infinite',
        float:    'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
