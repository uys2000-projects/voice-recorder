/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#000000", //siyah

        t0: "#f44336",
        i0: "#FF0080", 
        r0: "wheat", 

        t1: "#d51",
        i1: "purple", 
        r1: "#999", 

        t2: "#F430E1",
        i2: "blue", 
        r2: "#fff", 
      },
    },
  },
  plugins: [],
};
