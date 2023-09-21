/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0020BB',
        },
        secondary: {
          DEFAULT: '#00FFBE',
        },
        background: {
          DEFAULT: '#001528',
        },
        gray: {
          10: '#fcfbfe',
          20: '#f6f5f9',
          30: '#f1eff5',
          40: '#e5e3ed',
          50: '#d9d8e4',
          60: '#cdcddc',
          70: '#c0c1d4',
          80: '#b3b7cc',
          90: '#a6acc4',
        },
        cerise: {
          DEFAULT: '#da314f',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
