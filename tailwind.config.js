/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/common/**/*.{js,ts,jsx,tsx}',
    './src/layout/**/*.{js,ts,jsx,tsx}',
    './src/modules/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1316px',
        '3xl': '1390px',
        '4xl': '14866px',
        '5xl': '1870px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        agustina: ['Agustina-regular', 'sans-serif'],
      },
      colors: {
        main: '#27dcda',
        'primary-05': '#070808',
        'primary-10': '#0d0d0e',
        'primary-20': '#131315',
        'primary-30': '#18191b',
        'primary-50': '#252629',
        'primary-60': '#515154',
        'primary-80': '#a8a8a9',
        'primary-70': '#7c7d7f',
        'primary-90': '#d3d4d4',
        'primary-95': '#F4F4F4',
        'secondary-05': '#6b9898',
        'secondary-10': '#61a2a1',
        'secondary-20': '#4eb5b4',
        'secondary-30': '#3ac9c7',
        'secondary-40': '#27dcda',
        'secondary-50': '#1de6e3',
        'secondary-60': '#14efed',
        'secondary-80': '#0af9f6',
        'gray-60': '#b3b3b3',
        'gray-90': '#f2f2f2',
        other: '#d3b398',
      },
      borderWidth: {
        DEFAULT: '0.1rem',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0, 0, 0.2, 1)', //Ease out
      },
      backgroundImage: {
        'header-line': 'linear-gradient(to left, #484848 0, #484848 900px, #48484800);',
        'title-home':
          'linear-gradient(90deg, rgba(194,193,201,1) 0%, rgba(39,220,218,0.9715676229508197) 40%, rgba(6,198,237,1) 100%);',
        'exp-bg': 'linear-gradient(0deg, rgba(71,189,45,1) 0%, rgba(27,149,186,1) 100%)',
      },
    },
  },
  plugins: [],
};
