/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        franklin: ['Libre Franklin'],
        baskerville: ['Libre Baskerville']
      }
    },
    colors: {
      'space': '#303841',
      'night': '#3A4750',
      'poppy': '#D72323',
      'cement': '#EEEEEE',
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
