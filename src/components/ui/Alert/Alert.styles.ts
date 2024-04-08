import { tv } from '@/lib/tailwind-variant';

export const alertStyles = tv('p-2 rounded-md flex item-center gap-2', {
  variants: {
    variant: {
      success: 'bg-success-50 text-success-500',
      error: 'bg-danger-50 text-danger-500',
    },
  },
  defaultVariants: {
    variant: 'success',
  },
});
