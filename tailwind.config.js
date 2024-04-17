/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{primary:'#8806CE'},
      animation:{blink:'blink 1s linear infinite'
                },
      keyframes:{
           blink:{
              '0%':{opacity:'100%'},
              '100%':{opacity:'0%'}
           },
      },
    },
  },
  plugins: [],
}

