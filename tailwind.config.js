/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '576px',
      'md': '960px',
      'lg': '1440px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}

