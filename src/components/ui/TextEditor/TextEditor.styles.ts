import { tv } from '@/lib/tailwind-variant';

export const toolbarItemStyles = tv('rounded-md text-gray-800 hover:bg-gray-100 p-2', {
  variants: {
    active: {
      true: 'bg-neutral-100',
    },
  },
});
