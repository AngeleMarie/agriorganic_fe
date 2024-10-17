/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-green': '#102B26',
        'other-green': '#249402',
        'some-orange': '#EE6B19',
        'blackie': '#2D2D2D', 
      },
 
    },
  },
  plugins: [],
};
