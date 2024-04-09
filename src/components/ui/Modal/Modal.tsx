'use client';

import { Root, Trigger, DialogProps } from '@radix-ui/react-dialog';

import { ModalContent } from './components';

export function Modal({ children, ...props }: DialogProps) {
  return <Root {...props}>{children}</Root>;
}

Modal.Content = ModalContent;
Modal.Trigger = Trigger;
