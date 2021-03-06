module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: '#FFF0E2',
        'light-blue': '#A5DEE5',
        'light-green': '#DCEDC2',
        'light-yellow': '#FFEFB9',
        'emerald': '#3C9099',
        'dark-blue': '#1C3A53'
      },
      fontFamily: {
        'header': ['LuthonSouthardSerif', 'sans-serif'],
        'regular': ['NanumMyeongjo', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
