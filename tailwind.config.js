/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      height:{
        'carousel':'45.5rem',
        'overlay':'70%'
      }
    },
  },
  plugins: [],
};