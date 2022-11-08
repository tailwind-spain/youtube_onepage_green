/** @type {import('tailwindcss').Config} */
module.exports = {
  node : 'jit',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        sans : ['DM Sans', 'sans-serif']
      },
      colors : { 
        DEFAULT : '#71B214',
      },
      spacing : { 
        '13' : '3.25rem',
      },
      boxShadow : {
        primary : '0px 10px 20px rgba(0, 0, 0, 0.1)',
      },

    },
  },
  plugins: [],
}
