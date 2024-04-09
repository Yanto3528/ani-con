import { ComponentPropsWithoutRef } from 'react';

import { twMerge } from 'tailwind-merge';

type Props = ComponentPropsWithoutRef<'div'>;

export function PageBody({ children, className, ...props }: Props) {
  return (
    <div className={twMerge('pt-3 pb-10 px-6', className)} {...props}>
      {children}
    </div>
  );
}
