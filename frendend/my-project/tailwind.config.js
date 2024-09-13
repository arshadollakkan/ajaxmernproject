/** @type {import('tailwindcss').Config} */
export default {
  content: [
  
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage:{
       'hero-gradient':'linear-gradient(180deg ,#fde1ff,#e1ffea22 100%)',
      }
    },
  },
  plugins: [],
}

