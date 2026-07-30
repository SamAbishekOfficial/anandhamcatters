/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FAF7F2',
          deep: '#F0EBE1',
          card: '#F6F2EA',
        },
        charcoal: {
          DEFAULT: '#1C1C1C',
          light: '#4A4A4A',
          muted: '#717171',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8D5A3',
          dark: '#A38430',
        },
        crimson: {
          DEFAULT: '#9B2335',
          hover: '#7A1A28',
          deep: '#5C121D',
        }
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'slow-pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'subtle-zoom': 'zoomIn 20s ease-out infinite alternate',
      },
      keyframes: {
        zoomIn: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        }
      }
    },
  },
  plugins: [],
}
