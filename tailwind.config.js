const {
  guessProductionMode
} = require("@ngneat/tailwind");

module.exports = {
  prefix: '',
  purge: {
    enabled: guessProductionMode(),
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
       primairy: "#3B82F6"
     },
     
      fontFamily: {
        body: ["Poppins"]
      }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
