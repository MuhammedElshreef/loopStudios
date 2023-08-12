/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem"
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      }
    },
    extend: {
      fontFamily: {
        'alata': ['Alata', 'sans-serif'],
        'josefin' : ['Josefin Sans', 'sans-serif']
      }
    },
  }, 
  plugins: [],
}

