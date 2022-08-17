/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
      "./src/*.{html,js}",
      "./src/index.html"
  ],

  theme: {

    colors : {
      'color01' : '#1A1A1A',
      'color02' : '#034D5A',
      'color03' : '#CBA340',
      'color04' : '#EDE6A4',
      'color05' : '#D8DBEE',
      'color06' : '#F4F4F4',
      'color07' : '#FFFFFF'
    },

    container : {
      center : true
    },

    fontFamily : {
      'montserrat' : 'Montserrat'
    },

    extend: {

      screens : {
        'xl' : '1140px'
      },

    },
  },

  plugins: [],
}
