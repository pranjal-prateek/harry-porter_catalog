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
      width:{
        '300':'300px'
      },
      height:{
        'carousel':'45.5rem',
        'overlay':'70%',
        'card':'300px',
        'cardOverlay':'290px',
        'moviedetails':"500px",
        '450':'450px',
        '400':'400px',
        '350':'350px'
      },
      borderWidth:{
        '1':"1px"
      },
      zIndex:{
        '100':'1000'
      },
      objectPosition: {
        'center-bottom': '0 35%',
      }
    },
  },
  plugins: [],
};