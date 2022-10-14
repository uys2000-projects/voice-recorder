/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#000000", //siyah
        text: "#f44336",
        t2: "#FF0080", //pembe
        t3: "#f44336", //Turuncu
        t4: "wheat", //wheat,
      },
    },
  },
  plugins: [],
};
