/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./app/frontend/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

