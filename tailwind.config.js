/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1023px',
        'xl': '1200px',

      },
      fontFamily: {
        'exo2': ['"Exo 2"', 'sans-serif'],
        'outfit': ["Outfit", 'sans-serif']
      },
      fontSize: {
        xsm: '14px',
        sm: '16px',
        md: '20px',
        lg: '48px',
        xl: '64px'
      },
      colors: {
        'primary-black': '#131200',

      },
      lineHeight: {
        'lh120': '120%',
        'lh150': '150%'
      },
      backgroundColor: {
        'btn-bg': '#8F65EE'
      },
      borderRadius: {
        '4': '4px'
      },
      backgroundImage: {
        'hero-bg': "url('./assets/images/png/hero.webp')",
        'newsletter': "url('./assets/images/png/newsletter.webp')"
      },
      boxShadow: {
        'accordion-shadow': '0 4px 32px 0 rgba(0,0,0,0.08)'
      },
      gridAutoColumns: {
        'heroCol': 'repeat(1, minmax(0, 1fr))'
      }
    },
  },
  plugins: [],
}

