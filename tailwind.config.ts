import type { Config } from 'tailwindcss'

const config: Config = {
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
      boxShadow: {
        outer: '0 0 6px rgba(0,0,0,.6)',
        inner: 'inset 0 0 4px rgba(0,0,0,.6)',
      },
      spacing: {
        em: '1em',
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '18px',
        xl: '24px',
      },
      colors: {
        current: 'currentColor',
        info: {
          DEFAULT: '#43C6F5',
        },
        error: {
          DEFAULT: '#E01032',
        },
        warning: {
          DEFAULT: '#FCBA3',
        },
        success: {
          DEFAULT: '#1BE309',
        },
      },
    },
  },
  plugins: [],
}
export default config
