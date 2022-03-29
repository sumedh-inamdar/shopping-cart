/* eslint-disable unicorn/prefer-module */
/* eslint-env node */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['Josefin Sans', 'sans-serif']
      },
      backgroundImage: {
        'tennis-court': "url('./assets/homepage-bg.jpg')"
      }
    }
  },
  plugins: []
};
