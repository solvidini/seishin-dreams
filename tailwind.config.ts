import type { Config } from 'tailwindcss';
import { breakpoints, colors } from './src/config/';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      '2xs': '10px',
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '24px',
      '2xl': '28px',
    },
    extend: {
      screens: {
        ...breakpoints,
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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
        ...colors,
      },
    },
  },
  plugins: [],
};

export default config;
