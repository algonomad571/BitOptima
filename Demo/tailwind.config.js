/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          400: '#48A9A6',
          500: '#48A9A6',
        },
        red: {
          500: '#BE3144',
        },
        slate: {
          700: '#334155',
          800: '#1e293b',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['Inter', 'DM Sans', 'Manrope', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        'slide-up': 'slide-up 0.3s ease-out',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
};