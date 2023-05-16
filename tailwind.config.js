/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      colors: {
        methinks: {
          white: "#FFFFFF",
          lightgray: "#D0D7E1",
          darkgray: "#77818A",
          blue: "#BABFF6",
          pink: "#F7DEED",
          lightblack: "#1C1C1C",
          black: "#000000",
          background: "#24292F",
        },

      fontFamily: {
        publicSans: ["var(--font-publicSans)", "sans-serif"],

      },
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar")],
};
