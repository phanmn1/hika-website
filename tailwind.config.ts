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
    },
  colors: {
    'blue': '#9dbec9',
    'header': '#417e9f',
    'sand': '#EAD5B6', 
    'background': "#0f4763",
    'red': "rgb(248 113 113)",
    'footer': "#417e9f"
    },
  },
  plugins: [],
}
export default config
