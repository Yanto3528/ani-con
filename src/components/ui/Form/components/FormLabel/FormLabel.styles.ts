import { tv } from '@/lib/tailwind-variant';

export const formLabelStyles = tv('mb-2 block font-medium text-left', {
  variants: {
    required: {
      true: 'before:content-["*"] before:text-danger before:mr-1 before:align-middle',
    },
  },
});
