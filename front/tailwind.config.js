/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "hello-green": "#18d399",
        "hello-blue-light": "#6ef0fa",
        "hello-blue-dark": "#172c45",
        "hello-white": "#ffffff",
        "hello-gray": "#484848",
        "hello-black": "#102032"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),    
  ],
}
