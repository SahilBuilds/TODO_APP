/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          sky: " #2D9CDB",
          green: " #27AE60 ",
          orange : "#F2994A ",
          white: "#F2F2F2"

      }
    },
  },
  plugins: [],
}