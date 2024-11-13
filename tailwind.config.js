/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container : {
        center : true,
        padding : {
          DEFAULT : '1rem',
          sm : '3rem'
        }
      },
      fontFamily : {
        rale : ["Raleway", "sans-serif"],
        oxi : ["Oxanium", "sans-serif"]
      },
      backgroundImage : {
        fast : "url('/src/assets/fastestdelivary.png')"
      }
    },
  },
  plugins: [],
}