/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'], // Add Open Sans
      },
      colors: {
        black_bb: "#1E1E1E", // Define your custom black color
      },
    },
  },
  plugins: [],
};
