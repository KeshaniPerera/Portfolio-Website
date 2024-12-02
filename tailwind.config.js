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
        // darkPurple: '#8a31d0',
        // mediumPurple: '#634ee3'
      },
    },
  },
  plugins: [],
}

