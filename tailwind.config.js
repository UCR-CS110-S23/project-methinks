/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        publicSans: ["var(--font-publicSans)", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
