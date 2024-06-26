/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
      fontFamily:{
 
      },
      extend: {
        backgroundImage:{
          "home": "url('/assets/bg.png')"
        }
      },
    },
    plugins: [],
  }