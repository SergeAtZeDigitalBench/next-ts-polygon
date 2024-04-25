/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        slidein: {
          from: {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'border-spin':{
          '100%': {
            transform: 'rotate(-360deg)'
          }
        }
      },
      animation: {
        slidein: 'slidein 1s ease 300ms',
        slidein300: 'slidein 1s ease 300ms forwards',
        slidein500: 'slidein 1s ease 500ms forwards',
        slidein700: 'slidein 1s ease 700ms forwards',
        'border-spin': 'border-spin 7s linear infinite'
      },
    },
  },
  plugins: [],
}
