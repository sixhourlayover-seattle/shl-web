
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        kraken: {
          deepSea: "#001628",
          iceBlue: "#99D9D9",
          redAlert: "#E9072B",
          shadowBlue: "#355464",
          white: "#FFFFFF"
        }
      },
      boxShadow: {
        soft: "0 10px 25px -10px rgba(0,0,0,0.15)"
      },
      borderRadius: {
        '2xl': '1rem'
      }
    }
  },
  plugins: []
}
