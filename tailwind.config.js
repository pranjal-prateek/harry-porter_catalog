/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      borderColor:{
        "cardborder":'rgb(99,99,99)'
      },
      minWidth:{
        "card":"200px"
      },
      borderRadius:{
        "cardradius":"10px"
      },
      height:{
        'carousel':'45.5rem',
        'overlay':'70%',
        'card':'300px',
        'cardOverlay':'290px'
      },
      borderWidth:{
        '1':"1px"
      },
      zIndex:{
        '100':'1000'
      }
    },
  },
  plugins: [],
};