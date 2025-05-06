/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",]
  , theme: {
    extend: {
      container: {
        center: true,
        padding: '1.5rem',
      },
      transitionDuration: 300,
    },
  },
  plugins: [],
}

