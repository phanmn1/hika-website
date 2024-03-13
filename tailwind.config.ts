import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {

    },
    extend: {
      backgroundImage: {},
      transitionProperty: {
        'height': 'height'
      },
      colors: {
        'blue': '#9dbec9',
        'header': '#417e9f',
        'headerLight': '#c6d8e2',
        'sand': '#EAD5B6', 
        'background': "#0f4763",
        //'red': "rgb(248 113 113)",
        'link': "rgb(31, 81, 255)",
        'footer': "#417e9f"
      },
    },
  },
  plugins: [],
}
export default config
