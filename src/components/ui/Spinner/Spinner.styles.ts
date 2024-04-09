import { tv } from '@/lib/tailwind-variant';

export const spinnerStyles = tv('aspect-square animate-spin rounded-full', {
  variants: {
    colorScheme: {
      primary: 'border-transparent border-t-primary',
      white: 'border-transparent border-t-white',
      inherit: 'border-transparent border-t-inherit',
    },
    size: {
      sm: 'h-4 border-2',
      md: 'h-6 border-2',
      lg: 'h-12 border-4',
    },
  },
  defaultVariants: {
    colorScheme: 'primary',
    size: 'md',
  },
});
