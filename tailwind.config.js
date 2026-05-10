/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2196F3',
        secondary: '#FF9800',
        accent: '#4CAF50',
        alert: '#F44336',
        amber: '#FFC107',
      },
    },
  },
  plugins: [],
}
