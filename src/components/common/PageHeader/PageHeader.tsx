import { ComponentPropsWithoutRef } from 'react';

import { twMerge } from 'tailwind-merge';

type Props = ComponentPropsWithoutRef<'div'>;

export function PageHeader({ children, className, ...props }: Props) {
  return (
    <div
      className={twMerge(
        'h-16 border-b border-gray-200 px-6 flex items-center justify-between gap-2 bg-slate-100 sticky top-0 z-10',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
