import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          50: colors.blue[50],
          100: colors.blue[100],
          200: colors.blue[200],
          300: colors.blue[300],
          400: colors.blue[400],
          500: colors.blue[500],
          600: colors.blue[600],
          700: colors.blue[700],
          800: colors.blue[800],
          900: colors.blue[900],
          DEFAULT: colors.blue[500],
        },
        danger: {
          50: colors.red[50],
          100: colors.red[100],
          200: colors.red[200],
          300: colors.red[300],
          400: colors.red[400],
          500: colors.red[500],
          600: colors.red[600],
          700: colors.red[700],
          800: colors.red[800],
          900: colors.red[900],
          DEFAULT: colors.red[500],
        },
        success: {
          50: colors.green[50],
          100: colors.green[100],
          200: colors.green[200],
          300: colors.green[300],
          400: colors.green[400],
          500: colors.green[500],
          600: colors.green[600],
          700: colors.green[700],
          800: colors.green[800],
          900: colors.green[900],
          DEFAULT: colors.green[500],
        },
      },
      fontSize: {
        xxs: '.625rem',
      },
      backgroundImage: {
        'gradient-skeleton':
          'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0))',
      },
      keyframes: {
        slideDown: {
          '0%': { height: '0', borderBottom: '0' },
          '100%': {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        slideUp: {
          '0%': {
            height: 'var(--radix-accordion-content-height)',
          },
          '100%': { height: '0', borderBottom: '0' },
        },
        slideDownWithBorder: {
          '0%': { height: '0', borderBottom: 'none' },
          '100%': {
            height: 'var(--radix-accordion-content-height)',
            borderBottom: `1px solid ${colors.gray[200]}`,
          },
        },
        slideUpWithBorder: {
          '0%': {
            height: 'var(--radix-accordion-content-height)',
            borderBottom: `1px solid ${colors.gray[200]}`,
          },
          '100%': { height: '0', borderBottom: 'none' },
        },
        tooltipFadeIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        tooltipFadeOut: {
          '0%': {
            opacity: '1',
            transform: 'scale(1)',
          },
          '100%': {
            opacity: '0',
            transform: 'scale(0.9)',
          },
        },
        skeletonShimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        scaleIn: {
          '0%': {
            transform: 'scale(0)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
        scaleOut: {
          '0%': {
            transform: 'scale(1)',
          },
          '100%': {
            transform: 'scale(0)',
          },
        },
      },
      animation: {
        'slide-down': 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards',
        'slide-up': 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards',
        'slide-down-with-border':
          'slideDownWithBorder 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards',
        'slide-up-with-border': 'slideUpWithBorder 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards',
        'tooltip-fade-in': 'tooltipFadeIn 200ms ease-out forwards',
        'tooltip-fade-out': 'tooltipFadeOut 200ms ease-out forwards',
        'scale-in': 'scaleIn 200ms ease-out forwards',
        'scale-out': 'scaleOut 200ms ease-out forwards',
        'skeleton-shimmer': 'skeletonShimmer 1000ms infinite',
      },
    },
  },
  plugins: [],
};
export default config;
