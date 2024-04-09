import { ReactNode } from 'react';

import { Item, MenuItemProps } from '@radix-ui/react-dropdown-menu';
import { twMerge } from 'tailwind-merge';

type DropdownMenuItemProps = MenuItemProps & {
  icon?: ReactNode;
};

export default function DropdownMenuItem({
  children,
  className,
  icon,
  disabled,
  ...props
}: DropdownMenuItemProps) {
  return (
    <Item
      className={twMerge(
        'flex items-center gap-2 cursor-pointer transition-all px-4 py-2 text-sm font-medium outline-none hover:bg-gray-100',
        disabled && 'bg-gray-200 opacity-70 cursor-not-allowed',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {icon} <p>{children}</p>
    </Item>
  );
}
