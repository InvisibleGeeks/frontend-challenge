/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // 👋 This object is empty ON PURPOSE.
      //
      // You're free to define your own design tokens here (colors, typography,
      // spacing, radii, breakpoints…) if you want — it's OPTIONAL but we value it.
      // You can also lay things out with direct values (arbitrary values) if you prefer.
      //
      // Example (delete it or adapt it):
      // colors: { brand: '#121212', 'gray-97': '#F5F5F5' },
      // fontFamily: { display: ['Bricolage Grotesque', 'sans-serif'], body: ['Manrope', 'sans-serif'] },
    },
    screens: {
      // The test's single responsive breakpoint. You can change it if you prefer.
      laptop: '1024px',
    },
  },
  plugins: [],
}
