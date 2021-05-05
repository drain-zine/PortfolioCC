 // tailwind.config.js
const whitelist = [/^text-/];

 module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: whitelist,
    },
  },
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {},
   },
   variants: {
     extend: {
      borderWidth: ['hover'],
     },
   },
   plugins: [],
 }