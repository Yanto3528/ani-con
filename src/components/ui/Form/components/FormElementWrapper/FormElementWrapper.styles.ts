import { tv } from '@/lib/tailwind-variant';

export const elementWrapperStyles = tv(
  'border border-gray-200 text-sm outline-none focus-within:ring-2 transition-all w-full flex items-center justify-between text-left bg-white overflow-x-hidden',
  {
    variants: {
      size: {
        sm: 'h-8',
        md: 'h-10',
        lg: 'h-12',
      },
      colorScheme: {
        primary:
          'focus-within:border-primary focus-within:ring-primary-200 radix-state-open:border-primary',
        error:
          'border-red-500 focus-within:border-red-500 focus-within:ring-red-200 radix-state-open:border-red-500',
      },
      disabled: {
        true: 'bg-gray-100 cursor-not-allowed',
      },
      radius: {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      size: 'md',
      radius: 'md',
      colorScheme: 'primary',
    },
  }
);
