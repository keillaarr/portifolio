/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
      fontFamily:{
        playwriteMx: ['"Playwrite MX"', 'sans-serif'],
        playwriteItModerna: ['"Playwrite IT Moderna"', 'sans-serif'],
        openSans: ['"Open Sans"', 'sans-serif'],
      },
      extend: {
        backgroundImage:{
          "home": "url('/assets/bg.png')"
        }
      },
    },
    plugins: [],
  }