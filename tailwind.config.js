/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A300FF',
        primaryLight: '#9389ff',
        neutralPrimary: '#f3f3f3',
        neutralPrimaryLight: '#fafafa',
        neutralStrong: '#8a8a8a',
      },
    },
  },
  plugins: [],
};
