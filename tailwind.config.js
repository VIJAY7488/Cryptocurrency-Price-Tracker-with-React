/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '5px 5px 10px rgba(58,128,233,0.5)',
      }
    },
  },
  plugins: [],
}
