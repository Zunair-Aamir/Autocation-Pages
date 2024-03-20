/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      'xxs': '320px',
      // => @media (min-width: 320px) { ... }

      'xs': '390px',
      // => @media (min-width: 390px) { ... }

      'sm': '576px',
      // => @media (min-width: 575px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 992px) { ... } 

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1366px',
      // => @media (min-width: 1440px) { ... }

      '3xl': '1600px',
      // => @media (min-width: 1600px) { ... }
      '4xl': '1920px',
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      colors: { 
       'whitee': '#FFF',
       'blackee' : '#000',
       'supblue' : '#00AFF5',
       'supgrey' : 'rgba(0, 0, 0, 0.50)',
       'lightblue': 'rgba(0, 175, 245, 0.08)',
        'darkgrey': '#1F2937',
        'lightgrey': '#D1D1D1',
        'lightgrey2': '#0F1113',
        'brightred' : '#EF233C',
        'brightred2' : '#054752',
        },
      boxShadow: {
        neon: '0px 1px 2px 0px rgba(0, 0, 0, 0.25)',
        neon2: ' 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        Manrope : ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
   ],
}