/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
      animation: {
        grow: "grow 2s ease-in-out infinite",
      },
      keyframes: {
        grow: {
          "0%": { transform: "scaleX(1)" },
          "50%": { transform: "scaleX(1.5)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
    },
  },

  plugins: [],
};
