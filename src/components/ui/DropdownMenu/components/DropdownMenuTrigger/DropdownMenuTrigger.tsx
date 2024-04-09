import { Trigger, DropdownMenuTriggerProps } from '@radix-ui/react-dropdown-menu';
import { twMerge } from 'tailwind-merge';

export default function DropdownMenuTrigger({
  children,
  className,
  ...props
}: DropdownMenuTriggerProps) {
  return (
    <Trigger className={twMerge('rounded-md outline-none focus:ring-2', className)} {...props}>
      {children}
    </Trigger>
  );
}
