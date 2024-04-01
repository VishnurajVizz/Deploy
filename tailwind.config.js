/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'green': " #81E5BE",
        'black': " #0D0E11",
        'white': " #FFFFFF",
        'light-blue': " #477EF9",
        'sky-blue': " #47F9EE",
        "arsenic": "#41414160"
      },
      fontFamily: {
        'orbitron': 'Orbitron, sans-serif',
        'poppins': 'Poppins, sans-serif',
        'space': 'Space Grotesk, sans-serif',
        'rubik': 'Rubik Glitch, system-ui',
        'redRose':'Red Rose, serif'
      },
      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.05em",
        tight: "-.025em",
        normal: "0",
        wide: ".025em",
        wider: ".05em",
        widest: ".1em",
        widest: ".25em",
      },
      borderWidth: {
        DEFAULT: "1px",
      },
    },
  },
  plugins: [],
};
