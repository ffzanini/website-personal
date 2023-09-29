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
        'primary-main': '#127A79',
        'primary-light': '#55AFAD',
        'primary-dark': '#004949',

        'primary-main-low-opacity': 'rgba(18, 122, 121, 0.1)',
        'primary-light-low-opacity': 'rgba(	85, 175, 173, 0.1)',
        'primary-dark-low-opacity': 'rgba(62, 122, 121, 0.1)',

        'gray-900': '#090909',
        'gray-800': '#1A1A1A',
        'gray-700': '#2A2A2A',
        'gray-600': '#3A3A3A',
        'gray-500': '#4B4B4B',
        'gray-400': '#5B5B5B',
        'gray-300': '#808080',
        'gray-200': '#A5A5A5',
        'gray-100': '#CACACA',
        'gray-50': '#EFEFEF',
      },
      fontSize: {
        caption: '0.875rem',
        body: '1rem',
        h3: '1.2rem',
        h2: '1.5rem',
        h1: '3rem',
      },
      container: {
        center: true,

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
