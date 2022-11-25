/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#F28157",
        darkprimary: "#BF665E",
        secondary: "#04BF9D",
        darksecondary: "#03A696",
        darkgrey: "#191718",
        blueishsecondary: "#253659",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};