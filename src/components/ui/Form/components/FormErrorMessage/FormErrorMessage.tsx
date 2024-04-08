import { twMerge } from 'tailwind-merge';

import { FormErrorMessageProps } from './FormErrorMessage.types';

export function FormErrorMessage({ children, className, ...props }: FormErrorMessageProps) {
  return (
    <span
      className={twMerge('block text-xs mt-1 font-medium text-danger text-left', className)}
      {...props}
    >
      {children}
    </span>
  );
}
