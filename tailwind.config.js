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
      },
    },

    fontFamily: {


      DM :  "'DM Mono', monospace;",
      Chela : "'Chela One', cursive;",
      Lilita: "'Lilita One', cursive",
      Pop: "'Poppins', sans-serif",
      Dan : "'Dancing Script', cursive",
      sofia: "'Sofia', cursive",
      Yon: "'Ysabeau Office', sans-serif;",
      Boral: "'Borel', cursive;"
   },
  },
  plugins: [],
}
