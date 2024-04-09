import { Label, DropdownMenuLabelProps } from '@radix-ui/react-dropdown-menu';
import { twMerge } from 'tailwind-merge';

export default function DropdownMenuLabel({
  className,
  children,
  ...props
}: DropdownMenuLabelProps) {
  return (
    <Label className={twMerge('py-2 px-4', className)} {...props}>
      {children}
    </Label>
  );
}
