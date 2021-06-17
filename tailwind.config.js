module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          300: '#48b9ff',
          400: '#1DA1F2',
          500: '#1B95E0',
        },
        tweetgray: {
          100: '#5E7790',
          200: '#243447',
          300: '#001B2F',
          400: '#001829',
          500: '#14171A'
        },
        gray: {
          100: '#F7F9FA',
          200: '#EBEEF0'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
