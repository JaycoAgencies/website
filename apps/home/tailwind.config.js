/** @type {import('tailwindcss').Config} */
module.exports = {
  ...require("ui/tailwind.config"),
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./apps/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
