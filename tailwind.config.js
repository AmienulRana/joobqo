/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      spacing: {
        '70px': '70px',
        '100':'100px',
        '110': '110px',
        '30px':'30px'
      },
      colors: {
        'disabled': '#bcbcbc',
        'main-color': '#73a0f7',
        'orange': '#FBBC09',
      },
      borderRadius:{
        'half':'50%'
      }
    },
  },
  plugins: [],
}
