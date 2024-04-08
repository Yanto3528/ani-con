import { tv } from '@/lib/tailwind-variant';

export const spinnerStyles = tv('aspect-square animate-spin rounded-full', {
  variants: {
    colorScheme: {
      primary: 'border-gray-300 border-t-primary',
      white: 'border-gray-300 border-t-white',
      inherit: 'border-gray-300 border-t-inherit',
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
