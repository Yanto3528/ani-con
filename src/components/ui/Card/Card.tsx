import { ComponentPropsWithoutRef } from 'react';

import { twMerge } from 'tailwind-merge';

type Props = ComponentPropsWithoutRef<'div'>;

export function Card({ children, className, ...props }: Props) {
  return (
    <div
      className={twMerge(
        'border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
