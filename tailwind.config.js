/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
         ubuntu: ["'Ubuntu', sans-serif"],
        opensans: ["var(--font-open-sans)", "sans-serif"],
         bogle: ["var(--font-bbh-bogle)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
