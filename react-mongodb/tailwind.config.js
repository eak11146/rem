/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily:{
          "Kanit" : ['Kanit', 'serif'],
          "Pattaya" :["Pattaya", 'serif'],
        },
        gridAutoColumns: {
          '2fr': 'minmax(0, 2fr)',
        }
    },
  },
  plugins: [],
}

