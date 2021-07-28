const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@images': path.resolve(__dirname, 'src/assets/images/')
    }
  },
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}