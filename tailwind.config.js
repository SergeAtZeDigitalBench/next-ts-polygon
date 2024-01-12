/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["var(--font-quicksand)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      }
    },
  },
  plugins: [],
};
