/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        accent: '#EC994B',
        textColor: '#ffffff',
        blue: {
          100: '#E3F2FD',
          200: '#BBDEFB',
          300: '#90CAF9',
          400: '#64B5F6',
          500: '#42A5F5',
          600: '#2196F3',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F2F4F6',
          200: '#E5E8EB',
          300: '#D1D6DB',
          400: '#B0B8C1',
          500: '#8B95A1',
          600: '#6B7684',
          700: '#4E5968',
          800: '#333D4B',
          900: '#191F28',
        },
      },
      screens: {
        '2xl': { max: '1535px' },
        // => @media (max-width: 1535px) { ... }
        xl: { max: '1279px' },
        // => @media (max-width: 1279px) { ... }
        lg: { max: '1023px' },
        // => @media (max-width: 1023px) { ... }
        md: { max: '767px' },
        // => @media (max-width: 767px) { ... }
        sm: { max: '639px' },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
}
