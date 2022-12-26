/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  purge: ["./src/components/**/*.{js,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};
