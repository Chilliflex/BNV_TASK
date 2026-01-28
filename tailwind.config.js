/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Space Grotesk'", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: "#191A23",
        secondary: "#191A23",
        accent: "#B9FF66",
        background: "#F3F3F3",
      },
    },
  },
  plugins: [],
};
