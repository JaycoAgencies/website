const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        textBlack: '#000000',
        buttonLight: '#1D2D81',
        textLight: '#1D2D80',
        textWhite: '#ffffff',
        buttonDark: '#ADC58F',
        textDark: '#ADC58F',
      },
      backgroundImage: {
        servicesCardBg: "url('../../public/assets/images/service_bg.svg')",
      },
      screens: {
        mobile: { min: '320px', max: '480px' },
        tablet: { min: '481px', max: '768px' },
        laptop: { min: '769px', max: '1024px' },
        desktop: { min: '1025px', max: '1200px' },
        wide: { min: '1201px', max: '2000px' },
      },
    },
  },
  plugins: [],
});
