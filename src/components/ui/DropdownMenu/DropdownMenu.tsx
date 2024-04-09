'use client';

import { Root, Separator, DropdownMenuProps } from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from './components';

export function DropdownMenu({ children, ...props }: DropdownMenuProps) {
  return <Root {...props}>{children}</Root>;
}

DropdownMenu.Trigger = DropdownMenuTrigger;
DropdownMenu.Content = DropdownMenuContent;
DropdownMenu.Item = DropdownMenuItem;
DropdownMenu.Separator = Separator;
DropdownMenu.Label = DropdownMenuLabel;
