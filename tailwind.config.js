/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        blueWhale: "#1F3140",
        soothingSapphire: "#1F73DB",
      },
      letterSpacing: {
        x: "0.01em",
        "2x": "0.02em",
      },
    },
  },
  plugins: [require("tailwindcss-animate"),require('tailwind-scrollbar')({ nocompatible: true })],
}

