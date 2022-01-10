module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        animation: {
          fadeIn: "fadeIn 1s ease-in forwards"
        },
        keyframes: {
          fadeIn: {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 }
          }
        },
        height: {
          sm: '10rem',
    
          md: '20rem',
    
          lg: '30rem',
    
          xl: '40rem',

          xxl: '50rem',
        },
    },
  },
  variants: {
    animation: ["motion-safe"]
  },
  plugins: [],
}