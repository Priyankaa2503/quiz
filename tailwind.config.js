/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens:
      {
        sm: "320px",
        md: "769px",
        lg: "1026px"
      },
      fontFamily: {
        
        poppins: ['Poppins', 'sans-serif'],
        playfair:['Playfair Display', "sans-serif"]
        
      },
    },
  },
  plugins: [],
}