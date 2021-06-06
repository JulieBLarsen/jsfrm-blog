// tailwind.config.js
const colors = require('tailwindcss/colors');
module.exports = {
  purge: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.orange,
        secondary: colors.rose,
        neutral: colors.warmGray,
        light: '#f7f3f0',
        coral: '#ffb6a3',
        'coral-light': '#F5D1C3',
        teal: '#C4D7D1',
        'teal-dark': '#5F9595',
        'teal-neutral': '#AAB8BB',
      },
      fontFamily: {
        serif: [
          'Merriweather',
          'ui-serif',
          'Georgia',
          'Cambria',
          'Times New Roman',
          'Times',
          'serif',
        ],
      },
      height: {
        xxl: '40rem',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/line-clamp')],
};
