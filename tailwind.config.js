/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    minWidth: {
      '840': '840px',
      '320': '320px',
      
    },
    minHeight: {
      '380': '380px',
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

