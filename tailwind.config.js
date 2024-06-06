/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #FFFFFF, #DEDEDE)',
       
      },

boxShadow:{
  'customShadow':'-15px 0px 0px #bdc3c7',
  'customShadow2':'-15px 0px 0px #bdc3c7',
},
colors:{
  footerColor:{
    'customBackgroundColor':'#272727',
    
  }

}


    },
  },
  plugins: [],
}

