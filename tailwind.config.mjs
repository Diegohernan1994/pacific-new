/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        pw: {
          red: '#AB0000',
          'red-hover': '#8F0000',
          'red-press': '#740000',
          'red-tint': '#F6E5E5',
          black: '#111111',
          ink: '#1C1B1A',
          white: '#FFFFFF',
          'stone-50': '#F7F5F2',
          'stone-100': '#EFECE7',
          'stone-200': '#E2DED7',
          'stone-300': '#C9C4BB',
          'stone-500': '#8C877F',
          'stone-700': '#55524D',
          'stone-900': '#2B2927'
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['"Cormorant Garamond"', '"Times New Roman"', 'serif']
      }
    }
  },
  plugins: []
};
