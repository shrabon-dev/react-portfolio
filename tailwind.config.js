/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark':'#121212',
        'lightGreen':'#01C288',
        'orangeRed':'#C8492D',
        'shadowLight':'#B1B1B1',
      },
      fontFamily:{
        'kodchasan': ['Kodchasan',' sans-serif'],
        'mulish': ['Mulish', 'sans-serif'],
      },
      animation:{
        moveLeft:'moveLeft 4s ease-in-out infinite',
        rotateMoveTop:'rotateMoveTop 4s ease-in-out infinite',
        rotateMoveBtm:'rotateMoveBtm 4s ease-in-out infinite',
        scale:'scale 4s ease-in-out infinite',
      },
      keyframes:{
        moveLeft:{
          '0%,100%':{transform:'translateX(0px)'},
          '50%':{transform:'translateX(-50px)'}
        },
        rotateMoveTop:{
          '0%,100%':{transform:'translateY(0px) rotate(22deg)'},
          '50%':{transform:'translateY(-50px) rotate(22deg)'}
        },
        rotateMoveBtm:{
          '0%,100%':{transform:'translateY(0px) rotate(22deg)'},
          '50%':{transform:'translateY(50px) rotate(22deg)'}
        },
        scale:{
          '0%,100%':{transform:'scale(1)'},
          '50%':{transform:'scale(.6)'}
        },
      }
    },
  },
  plugins: [],
}

