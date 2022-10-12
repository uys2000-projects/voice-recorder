/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        t1: "#000000", //siyah
        t2: "#FF0080", //pembe
        t3: "#f44336", //Turuncu
        t4: "#2196f3", //Mavi,
      },
    },
  },
  plugins: [],
};
