/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#494AF4',
        primaryLight: '#9389ff',
        neutralPrimary: '#f3f3f3',
        neutralStrong: '#a3a3a3',
      },
    },
  },
  plugins: [],
};
