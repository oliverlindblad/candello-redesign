/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Brand colors
        brand: {
          green: '#377039',
        },
        // Neutral colors
        neutral: {
          dark: '#252424',
          light: '#FAFAFA',
          grey: '#CFCFCF',
        },
      },
      fontFamily: {
        // Headings
        heading: ['Space Grotesk', 'sans-serif'],
        // Body text
        body: ['Roboto', 'sans-serif'],
        // Aliases for convenience
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

