/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {fontFamily: {
      franklin: ['Libre Franklin'],
      baskerville: ['Libre Baskerville']
    }
  },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
