import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      colors: {
        surface: {
          0: '#050505',
          1: '#0A0A0A',
          2: '#121212',
          3: '#222222'
        },
        neon: {
          DEFAULT: '#00E08F',
          dim: 'rgba(0, 224, 143, 0.1)',
          glow: 'rgba(0, 224, 143, 0.2)',
        },
        text: {
          primary: '#F0F0F0',
          muted: '#888888'
        }
      },
      backgroundImage: {
        'dot-grid': 'radial-gradient(#222 1px, transparent 1px)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scroll': 'scroll 20s linear infinite',
        'scan': 'scan 3s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        }
      }
    }
  },
  plugins: [],
} satisfies Config;
