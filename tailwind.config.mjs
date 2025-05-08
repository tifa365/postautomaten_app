/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['SpiegelSans', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        brandUI: ['Georgia', 'serif'],
        sansUI: ['SpiegelSans', 'system-ui', 'sans-serif']
      },
      colors: {
        'news-red': '#e64415',
        'news-dark': '#1a1a1a',
        'news-gray': '#6c6c6c',
        'news-light': '#f7f7f7',
        'primary-base': '#e64415',
        'dm-primary-base': '#e64415',
        'shade-dark': '#6c6c6c',
        'shade-light': '#c4c4c4',
        'shade-lightest': '#f7f7f7',
        'black': '#000000',
        'white': '#ffffff',
        'separator-t': '#e6e6e6',
        'separator-b': '#e6e6e6'
      },
      maxWidth: {
        'content': '700px',
        'wide': '1000px',
        'screen-xl': '1280px'
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '40': '40px',
      },
      fontSize: {
        's': '14px',
        'base': '16px',
        'l': '18px',
        'xl': '20px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '42px',
        '7xl': '54px',
      },
      borderWidth: {
        DEFAULT: '1px',
      },
      lineHeight: {
        'tight': '1.2',
        'normal': '1.5',
        'loose': '1.8',
      },
    },
  },
  plugins: [],
}