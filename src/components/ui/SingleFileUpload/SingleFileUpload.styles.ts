import { tv } from '@/lib/tailwind-variant';

export const uploadFileRootStyles = tv(
  'p-6 flex flex-col items-center text-center border-2 border-dashed bg-white border-gray-200 rounded-lg cursor-pointer relative',
  {
    variants: {
      error: {
        true: 'border-danger',
      },
      isUploading: {
        true: 'cursor-not-allowed',
      },
    },
  }
);
