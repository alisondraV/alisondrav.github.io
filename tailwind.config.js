/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false,
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
