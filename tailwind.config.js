module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"

  ],
  theme: {
    extend: {
      colors: {
        blueLogo: '#156CDD',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
