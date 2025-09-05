/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          25: '#fefcff',
          50: '#faf7ff',
        }
      }
    },
  },
  plugins: [],
};
