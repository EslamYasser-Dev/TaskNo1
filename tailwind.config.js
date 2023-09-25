/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'poppins': ['Poppins-SemiBold', 'sans-serif'],
      'helvetica': ['Helvetica', 'sans-serif'],

    },
    colors:{
      transparent: 'transparent',
      white:'#ffffff',
      black:'#000000',
      greendark:'#00635b',
      greenbutton:'#087b2f',
      greenlight:'#d0f7fa'
    },
    screens: {
      'xs':'320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      boxShadow: {
        'box': '0px 4px 23px rgba(0, 0, 0, 0.04)'
      }
    },
  },
  plugins: [],
}

