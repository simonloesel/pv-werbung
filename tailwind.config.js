/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef3e2',
          100: '#fde4b8',
          200: '#fbc87a',
          300: '#f9a53b',
          400: '#f78b1a',
          500: '#f7730b',
          600: '#e85806',
          700: '#c04109',
          800: '#99330f',
          900: '#7b2c10',
        },
      },
    },
  },
  plugins: [],
}
