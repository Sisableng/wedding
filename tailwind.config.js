/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js", "index.html"],
  important: true,
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "4rem",
        lg: "4.5rem",
      },
    },
    fontFamily: {
      name1: "Mrs Saint Delafield, cursive",
      name2: "Great Vibes, cursive",
    },
    extend: {},
  },
  plugins: [],
};
