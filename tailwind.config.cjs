/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ...require('./public/themes/ruby/tailwind-ruby.cjs'),
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        ruby: { ...require('./public/themes/ruby/daisy-ruby.cjs') },
      },
    ],
  },
};
