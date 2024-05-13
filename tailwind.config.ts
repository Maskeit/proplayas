import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
        naranja: {
          50: '#FCF8F0',
          100: '#F6E8CD',
          200: '#F1DBB7',
          300: '#E8C289',
          400: '#DEA159',
          500: '#D68739',
          600: '#C8702E',
          700: '#A65828',
          800: '#854627',
          900: '#6C3B22',
          950: '#3A1D10',
        },
        verde: {
          50: '#F5F6EF',
          100: '#E8EBDC',
          200: '#D2D8BE',
          300: '#B2BD92',
          400: '#9AA774',
          500: '#7D8B57',
          600: '#616E42',
          700: '#4B5536',
          800: '#3E462E',
          900: '#363D2A',
          950: '#1B1F14',
        },
        cafe: {      
          50: '#F5F4F1',
          100: '#E6E1DB',
          200: '#CFC4B9',
          300: '#B3A291',
          400: '#9D8472',
          500: '#917766',
          600: '#796155',
          700: '#624D46',
          800: '#55423E',
          900: '#4A3B39',
          950: '#2A1F1E',
        },
        azul: {
          50: '#F1FAFA',
          100: '#DAF0F3',
          200: '#B3DEE5',
          300: '#8ACAD6',
          400: '#53ABBD',
          500: '#378FA3',
          600: '#30758A',
          700: '#2D6071',
          800: '#2C505E',
          900: '#284551',
          950: '#162C36',
        },
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
