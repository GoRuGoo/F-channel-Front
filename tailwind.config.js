/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        chgreen: "#C5FFC5",
        chblue: "#0000FF",
      },
    },
  },
  plugins: [],
};
