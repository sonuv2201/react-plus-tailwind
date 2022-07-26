/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateY(-40px) translateX(50px)' },
          '50%': { transform: ' translateY(40px)  translateX(50px)' },
        },
        spin: {
          '0%, 100%': { transform: ' rotate(0deg) translateX(-50px)' },
          '50%': { transform: 'rotate(5deg) translateX(-150px)' },
        }
      }
    },
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
    }
  },
  plugins: [],
}
