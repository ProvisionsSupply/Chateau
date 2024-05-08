/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*/*.liquid"],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      backgroundColor: {
        "primary": '#F3F3F3',
        "secondary": "#2B2525",
      },
      stroke: {
        "primary": '#F3F3F3',
        "secondary": "#2B2525",
      },
    },
  },
  plugins: [],
}

