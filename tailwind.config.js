/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        // OpenClaw signature red accent
        primary: {
          50: '#fff1f1',
          100: '#ffe4e4',
          200: '#ffcccc',
          300: '#ffa3a3',
          400: '#ff7070',
          500: '#ff5c5c',
          600: '#e83d3d',
          700: '#c52020',
          800: '#a31c1c',
          900: '#7a1515',
          950: '#430e0e',
        },
        // OpenClaw teal secondary accent
        accent: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        // OpenClaw dark surfaces mapped onto Tailwind gray scale
        gray: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#71717a',
          600: '#52525b',
          700: '#1e2028',  // openclaw border
          800: '#161920',  // openclaw card bg
          900: '#13151b',  // openclaw alt section bg
          950: '#0e1015',  // openclaw main bg (darkest)
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.9' },
        },
      },
    },
  },
  plugins: [],
}
