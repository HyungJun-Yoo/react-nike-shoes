/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pastel_blue: 'rgba(173, 216, 230, .9)',
        pastel_pink: 'rgba(255, 182, 193, .9)',
        pastel_mint: 'rgba(152, 251, 152, .9)',
      },
    },
  },
  plugins: [],
}
