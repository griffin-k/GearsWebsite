/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
    //  'mybg': 'linear-gradient(to left, rgba(74, 144, 226, 0.9), rgba(123, 77, 255, 0.7))'
      'mybg': 'url("/assets/g.png")'

      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-filters'),
  ],
};
