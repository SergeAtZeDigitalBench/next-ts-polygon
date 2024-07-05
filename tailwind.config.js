/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
       gridTemplateColumns: {
        'gutter-grid': '1fr min(64rem,100%) 1fr',
      },
      gridColumn: {
        body: '2',
        'full-bleed': '1 / 4',
      },
    },
  },
  plugins: [],
};
