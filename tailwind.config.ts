import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-main': '#CE8498',
        'primary-light': '#5C609F',
        'primary-dark': '#9A7182',
        'primary-low-opacity': 'rgba(92, 96, 159, 0.2)',
        'dark-mode': '#FADA5E',
        'gray-900': '#040405',
        'gray-800': '#212122',
        'gray-700': '#3E3F3F',
        'gray-600': '#5B5C5C',
        'gray-500': '#797979',
        'gray-400': '#969696',
        'gray-300': '#D1D5DB',
        'gray-200': '#E5E7EB',
        'gray-100': '#EDEEED',
        'gray-50': '#FCFCFB',
      },
      fontSize: {
        caption: '0.875rem',
        body: '1rem',
        h3: '1.5rem',
        h2: '2rem',
        h1: '3.375rem',
      },
      container: {
        center: true,
        padding: '8px',

        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: 'calc(1216px + 16px)',
          '2xl': 'calc(1216px + 16px)',
        },
      },
    },
  },
  plugins: [],
}
export default config
