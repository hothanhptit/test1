const plugin = require('tailwindcss/plugin');
module.exports = {
  // prefix: 'tw-',
  content: ['./src/main/webapp/**/*.{js,jsx,ts,tsx}', './src/main/webapp/index.html'],
  theme: {
    extend: {
      fontFamily: {
        valky: ['NVNValky'],
        Felix: ['FelixTitling'],
        Fahkwang: ['Fahkwang'],
        BaiJamjuree: ['BaiJamjuree'],
        LinotypeZapfino: ['LinotypeZapfino'],
      },
      screens: {
        // by default (minwidth)
        sc390: '390px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      zIndex: {
        '-1': -1, // -1    :background
        1: 1, // 1     :flag
        2: 2, // 2     :flag content
      },
      colors: {
        blue: {
          50: 'var(--blue-50)',
          100: 'var(--blue-100)',
          200: 'var(--blue-200)',
          300: 'var(--blue-300)',
          400: 'var(--blue-400)',
        },
        white: {
          100: 'var(--white-100)',
        },
        green: {
          100: 'var(--green-100)',
          200: 'var(--green-200)',
        },
        grey: { 100: 'var(--grey-100)' },
        cancel: 'var(--cancel-color)',
      },
      boxShadow: {
        DEFAULT: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      fontSize: {
        // follow figma
        'title-product': ['10px', '12px'],
        'wap-normal': ['14px', '18px'],
        'wap-regular2': ['14px', '17px'],
        'sub-title': ['12px', '14px'],
        'medium-normal': ['16px', '20px'],
        normal: ['18px', '20px'],
        normal1: ['20px', '22px'],
        normal2: ['24px', '31px'],
        title: ['28px', '36px'],
        title1: ['32px', '36px'],
        header2: ['48px', '52px'],
        header3: ['64px', '70px'],
        header8xl: ['96px', '106px'],
      },
      keyframes: {},
      animation: {},
      borderRadius: {
        xs: '4px',
        sm: '8px',
        md: '10px',
        lg: '20px',
        xl: '24px',
      },
    },
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      padding: '0rem',
      center: true,
    },
  },
  plugins: [
    plugin(function ({ addVariant, addBase, addUtilities, addComponents, theme }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
      addVariant('first', '&:nth-child(1)');
      addVariant('second', '&:nth-child(2)');
      addVariant('third', '&:nth-child(3)');
      addComponents({});
      addBase({
        body: {
          padding: 0,
          margin: 0,
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '20px',
          background: theme('colors.bg.100'),
          // width: '100vw',
          minHeight: '100vh',
          backgroundColor: theme('colors.background[DEFAULT]'),
        },
        p: {
          padding: 0,
          margin: 0,
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '20px',
        },
        a: {
          textDecoration: 'none',
          backgroundColor: 'transparent',
        },
      });
      addComponents({
        '.btn': {
          display: 'flex',
          minWidth: '100px',
          height: '48px',
          padding: '0 20px',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '8px',
          backgroundColor: theme('colors.white'),
        },
      });

      addUtilities({
        '.scrollbar-none-height': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',

          /* Firefox */
          'scrollbar-width': 'none',

          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.text-editor ': {
          '*': {
            color: 'white !important',
          },
        },
        '.h-screen-head': {
          height: 'calc(100vh - 96px)',
        },
      });
    }),
  ],
};
