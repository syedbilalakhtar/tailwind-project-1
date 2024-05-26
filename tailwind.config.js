/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/img/banner.jpeg')",
        'lastbackground': "url('/src/img/lastbackground.jpg')",
      }
    },
  },
  plugins: [],
}

