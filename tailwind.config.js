module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary:{
          100:"hsl(185, 75%, 39%)",
          200:"hsl(229, 23%, 23%)",
          300:"hsl(227, 10%, 46%)"
        },
        neutral: "hsl(0, 0%, 59%)"
      },
      fontFamily:{
        primary: ["Kumbh Sans","sans-serif"]
      },
      backgroundImage: {
        pattern: "url('images/bg-pattern-bottom.svg')"
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
