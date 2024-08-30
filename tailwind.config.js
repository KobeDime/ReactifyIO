/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customOne: '#455d7a',
        customTwo: '#DC2626',
        customThree: '#16A34A',
      },
    },
  },
  plugins: [],
};
