/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.card': {
          border: `1px solid ${theme('colors.gray.700')}`,
          borderRadius: theme('borderRadius.sm'),
          boxShadow: theme('boxShadow.sm')
        }
      })
    })
  ],
}
