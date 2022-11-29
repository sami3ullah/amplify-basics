const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const colors = {
  darkMode: "true",
  ...defaultColors,
  ...{
    primary: "#F28157",
    darkprimary: "#BF665E",
    secondary: "#04BF9D",
    darksecondary: "#03A696",
    darkgrey: "#191718",
    blueishsecondary: "#253659",
  },
};

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
    colors: colors,
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
