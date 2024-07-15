/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryDark: '#BB2C51',
        secondary: '#421D4B',
        dark: '#303030',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        cursive: ['Ephesis', 'cursive'],
      },
      container: {
        center: true,
        padding: {
          default: '1rem',
          sm: '2rem',
          lg: '3rem',
          xl: '4rem'
        }
      }
    },
  },
  plugins: [],
}

