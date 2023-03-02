/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#f37515",
        body: "#1d2024",
        "main-dark": "#282c31",
        "main-light-dark": "#1f2326",
        "dark-gray": "#afb2b7",
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        card: "repeat(auto-fit, minmax(300px, 1fr))",
      },
    },
  },
  plugins: [],
};
