/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: "hsl(75, 94%, 57%)"
        },
        neutral: {
          grey: "hsl(0, 0%, 20%)",
          darkGrey: "hsl(0, 0%, 12%)",
          offBlack: "hsl(0, 0%, 8%)",
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}