/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'Secondary': '#141414',
        'neutral-1': '#434343',
        'neutral-2': '#E7E7ED',
        'Primary': '#120B48',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        sora: ['var(--font-sora)'],
        work_sans: ['var(--font-work-sans)'],
        sen: ['var(--font-sen)'],
      },
    },
  },
  plugins: [],
}
