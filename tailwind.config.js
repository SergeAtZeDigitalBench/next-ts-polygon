/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        gallery: 'repeat(auto-fit, minmax(250px, 1fr))',
        pages: 'repeat(auto-fit, minmax(350px, 1fr))',
        'gutter-grid': '1fr min(64rem,100%) 1fr',
      },
      gridColumn: {
        'full-bleed': '1 / 4',
      },
    },
  },
  plugins: [],
};
