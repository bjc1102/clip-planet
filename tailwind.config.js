const primaryColor1 = '#222831'
const primaryColor2 = '#393E46'
const accentColor1 = '#00ADB5'
const accentColor2 = '#EEEEEE'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './public/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        inherit: 'inherit',
        current: accentColor2,
        primaryColor1: primaryColor1,
        primaryColor2: primaryColor2,
        accentColor1: accentColor1,
        accentColor2: accentColor2,
        white: '#ffffff',
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
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
