import type { Config } from 'tailwindcss'
/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-bullets': '#9A3B3B',
            h1: {
              fontWeight: '750',
            },
            strong: {
              fontWeight: '750',
            }
          }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'sunset1': '#9A3B3B',
        'sunset2': '#C08261',
        'sunset3': '#E2C799',
        'sunset4': '#F2ECBE',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
