/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'gradient-to-right': 'linear-gradient(to right, #bee25a, #357135)',

      },
      colors: {
        'dark-cream': '#F4E8C1', // Add your custom color here
        '#966F33': '#966F33',
        'green-1':'#D3E6C8',
        'green-2':'#e1fd94',
        'black-1':'#555',
        'gray-2':"#777",
        'green-3':'#357135',
        'gray-1':'#F9FaFB',
        'lightgreen':'#d3e6c8',
        'green-4':'#D3E6C8',
      },
      keyframes: {
        'blink-cursor': {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        'blink-cursor': 'blink-cursor 1s step-end infinite',
      },
    },
  },
  plugins: [],
}
