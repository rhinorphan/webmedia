/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {fontFamily: {
      franklin: ['Libre Franklin'],
      baskerville: ['Libre Baskerville']
    }
  },
  },
  plugins: [],
}
