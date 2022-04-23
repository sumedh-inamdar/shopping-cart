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
        'tennis-court': "url('./assets/homepage-bg-red.jpg')"
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-in-top': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(50px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        }
      },
      animation: {
        'fade-in-down-250': '1s ease-out 250ms forwards fade-in-down',
        'fade-in-down-500': '1s ease-out 500ms forwards fade-in-down',
        'fade-in-down-750': '1s ease-out 750ms forwards fade-in-down',
        'fade-in-down-1000': '1s ease-out 1s forwards fade-in-down',
        'fade-in-left-250': '1s ease-out 250ms forwards fade-in-left',
        'fade-in-left-500': '1s ease-out 500ms forwards fade-in-left',
        'fade-in-left-750': '1s ease-out 750ms forwards fade-in-left',
        'fade-in-left-1000': '1s ease-in 1s forwards fade-in-left',
        'fade-in-top-0': '1s ease-out 0ms forwards fade-in-top',
        'fade-in-top-250': '1s ease-out 250ms forwards fade-in-top',
        'fade-in-top-500': '1s ease-out 500ms forwards fade-in-top',
        'fade-in-top-750': '1s ease-out 750ms forwards fade-in-top',
        'fade-in-top-1000': '1s ease-out 1s forwards fade-in-top'
      }
    }
  },
  plugins: [require('tailwindcss-animation-delay')]
};
