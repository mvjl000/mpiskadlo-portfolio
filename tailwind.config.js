const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)', ...fontFamily.sans],
        unbounded: ['var(--font-unbounded)', ...fontFamily.sans],
        anton: ['var(--font-anton)', ...fontFamily.sans],
      },
      colors: {
				'hero-bg': '#050505',
				'default-font': '#ffffff',
      },
      gridTemplateColumns: {
        projects: '4fr 2fr',
      },
      gridTemplateRows: {
        projects: '3fr 1fr'
      },
      screens: {
        'xs': '482px'
      }
    },
  },
  plugins: [],
}
