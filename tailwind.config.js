/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
       gridTemplateColumns: {
        gallery: "repeat(auto-fit, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [],
};
