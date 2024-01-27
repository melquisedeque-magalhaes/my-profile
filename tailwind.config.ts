import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#8A42DB',
          400: '#8A42DB',
        },
        secondary: {
          500: '#7DFFAF',
        },
        'surface-background': '#171023',
        'surface-primary': '#2C243B',
        'surface-secondary': '#413A4F',
        'surface-tertiary': '#4E4563',
        'text-primary': '#F5F6F6',
        'text-secondary': '#CDD0D4',
      },
      fontFamily: {
        heebo: ['var(--font-heebo)'],
        kalam: ['var(--font-kalam)'],
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(90deg, #9955E8 0%, #7BFFAF 100%)',
      },
    },
  },
  plugins: [],
}
export default config
