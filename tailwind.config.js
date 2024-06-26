/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #FFFFFF, #DEDEDE)',
        'custom-gradient2':'linear-gradient(180deg, #F2F2F2 0%, #BBBBBB 94.76%)'
       
      },

boxShadow:{
  'customShadow':'-15px 0px 0px #bdc3c7',
  'customShadow2':'-15px 0px 0px #bdc3c7',
},
colors:{
  footerColor:{
    'customBackgroundColor':'#272727',
    
  }

},


customZindex:{
  '-1':'-1',
}


    },
  },
  plugins: [],
}

