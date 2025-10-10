/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#FFFAF0',   // Warm white (background)
          100: '#FDF5E6',  // Light cream (secondary background)
          200: '#F5DEB3',  // Latte cream (secondary sections)
          300: '#E6C794',  // Light caramel
          400: '#D4A574',  // Medium caramel
          500: '#C18456',  // Caramel (accent)
          600: '#A0522D',  // Coffee cherry (accent)
          700: '#8B4513',  // Coffee bean brown (primary)
          800: '#6B3410',  // Dark coffee brown
          900: '#3E2723',  // Espresso (text)
          leaf: '#7CB342', // Coffee leaf green (accent)
          caramel: '#D2691E', // Bright caramel (buttons)
        }
      },
    },
  },
  plugins: [],
}
