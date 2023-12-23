import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        primary:"#8E2FF2",
        dark:"#111111",
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"3rem",

        }
      },
    },
  },
  plugins: [],
}
export default config
