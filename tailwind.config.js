/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif']
    },
    extend: {
      colors: {
        'blueishGreen': '#253659',
        'darkGreen': '#03A696',
        'green': '#04BF9D',
        'orange': '#F28157',
        'darkOrange': '#BF665E',
        'darkBackground': '#191718'
      }, 
    },
  },
  plugins: [],
}