import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#6D5AE6',
          dark: '#5747C9',
          light: '#8975FF'
        },
        'secondary': {
          DEFAULT: '#4A8CFF',
          dark: '#3A70CC',
          light: '#6BA1FF'
        },
        'background': {
          DEFAULT: '#13111C',
          dark: '#0D0B14',
          light: '#1A1825'
        },
        'text': {
          DEFAULT: '#FFFFFF',
          secondary: '#E1E1E3',
          muted: '#9490A7'
        },
        'accent': {
          DEFAULT: '#1E1B2E',
          dark: '#17152A',
          light: '#252236'
        }
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.125rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.875rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #6D5AE6, #4A8CFF)',
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [],
}

export default config 