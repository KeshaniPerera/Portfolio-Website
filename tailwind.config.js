/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: '#EFF1FF',
        lightPurple: '#CFB3F0',
        lightBlue2: '#D1D8FF',
        bgGrey: '#F5F6F7',
        title: '#cab2f0'

        // darkPurple: '#8a31d0',
        // mediumPurple: '#634ee3'
      },
      fontFamily: {
        links: ['Open Sans', 'sans-serif'],
        name: ['Crimson Pro', 'sans-serif'],
        jobTitle: ['Instrument Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

