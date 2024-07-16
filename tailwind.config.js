/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundImage: {
      'custom-bg': "url('src/assets/bg.jpg')",
    },
  },
  plugins: [],
};
