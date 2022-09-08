/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#10D48E',
        lighter: "#B5F5DE",
        secondary: '#000000',
        negative: '#FFFFFF'
      },
      borderRadius : {
        'big': '408px',
      },
      fontFamily: {
        head: ['Montserrat'],
        copy: ['Merriweather']
      }
    },

  },
  plugins: [],
}

