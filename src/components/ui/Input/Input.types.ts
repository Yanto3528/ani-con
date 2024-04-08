import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { FormElementProps } from '@/components/ui/Form';

export type InputProps = Omit<ComponentPropsWithoutRef<'input'>, 'size'> &
  FormElementProps & {
    rightElement?: ReactNode;
    leftElement?: ReactNode;
  };
