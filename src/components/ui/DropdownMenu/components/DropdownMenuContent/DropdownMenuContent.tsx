import { ReactNode } from 'react';

import { Content, Portal, MenuContentProps } from '@radix-ui/react-dropdown-menu';
import { twMerge } from 'tailwind-merge';

type DropdownMenuContentProps = MenuContentProps & {
  overlayElement?: ReactNode;
};

export default function DropdownMenuContent({
  children,
  className,
  ...props
}: DropdownMenuContentProps) {
  return (
    <Portal>
      <Content
        className={twMerge(
          'relative z-50 max-h-[20rem] min-w-[12rem] py-4 rounded-lg bg-white shadow-md radix-state-closed:animate-out radix-state-closed:fade-out radix-state-closed:slide-out-to-top-1 radix-state-open:animate-in radix-state-open:fade-in radix-state-open:slide-in-from-top-2 radix-side-top:-translate-y-[10%] radix-side-bottom:translate-y-[10%]',
          className
        )}
        {...props}
      >
        <div>{children}</div>
      </Content>
    </Portal>
  );
}
