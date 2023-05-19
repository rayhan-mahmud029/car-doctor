/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'liner-gradient': 'linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0) 100%)'

      }
    },
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],
}

