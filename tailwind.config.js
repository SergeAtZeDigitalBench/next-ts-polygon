/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        squish: {
          "50%": { scale: "1.4 1.6" },
        },
      },
      animation: {
        squish: "squish 200ms ease-in-out",
      },
    },
  },
  plugins: [],
};
