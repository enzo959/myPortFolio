/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        perspective: {
            1000: '1000px',
        },
        rotate: {
            'y-180': '180deg',
        },
    },
  },
  plugins: [],
}

