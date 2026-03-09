import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        dm: ['var(--font-dm)', 'sans-serif'],
      },
      colors: {
        g1: '#0a2e0a',
        g2: '#1a5c1a',
        g3: '#2eb82e',
        g4: '#5ce65c',
        g5: '#a8f5a8',
        dark: '#060f06',
        brand: {
          red: '#e63b2e',
        },
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'float': 'float 18s ease-in-out infinite alternate',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'ticker': 'ticker 30s linear infinite',
        'orbit': 'orbit 20s linear infinite',
        'ping-slow': 'pingSlow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translate(0,0) scale(1)' },
          '100%': { transform: 'translate(40px, 60px) scale(1.1)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.7)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        orbit: {
          '0%': { transform: 'translate(-50%,-50%) rotate(0deg)' },
          '100%': { transform: 'translate(-50%,-50%) rotate(360deg)' },
        },
        pingSlow: {
          '0%, 100%': { boxShadow: '0 0 14px #2eb82e' },
          '50%': { boxShadow: '0 0 28px #2eb82e, 0 0 6px rgba(46,184,46,0.4)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
