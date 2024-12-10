import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-color': {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#282828',
        },
      },
      boxShadow: {
        'inset-white': 'inset 0 0 8px 0.82px rgba(255, 255, 255, 0.25)',
        'drop-shadow': '0 0 8px rgba(255, 255, 255, 0.25)',
      },
      backgroundImage: {
        'radial-dark': 'radial-gradient(#000, #00000000)',
      },
      keyframes: {
        growLeftToRight: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
        growRightToLeft: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'right' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'right' },
        },
      },
      animation: {
        growLeftToRight: 'growLeftToRight 2s infinite ease-in-out',
        growRightToLeft: 'growRightToLeft 2s infinite ease-in-out',
      },
    },
  },
  plugins: [nextui()],
};
