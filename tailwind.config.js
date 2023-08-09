/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#e72a00",
          800: "#ff441a",
          700: "#ff512a",
          600: "#d14222",
          500: "#ff6c4b",
          400: "#dd5031",
          300: "#ff876c",
          200: "#ff947c",
          100: "#ffbdae",
        },
      },
    },
  },
  plugins: [],
};
