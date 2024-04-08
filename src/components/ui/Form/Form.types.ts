import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { VariantProps } from '@/lib/tailwind-variant';

import { elementWrapperStyles } from './components/FormElementWrapper/FormElementWrapper.styles';

export type ElementWrapperStylesProps = VariantProps<typeof elementWrapperStyles>;

export type BaseFormElementProps = {
  error?: ReactNode;
  disabled?: boolean;
};

export type BaseFormElementWrapperProps = Omit<ElementWrapperStylesProps, 'state'> &
  BaseFormElementProps & {
    wrapperClassName?: string;
  };

export type FormElementProps = BaseFormElementWrapperProps & {
  label?: ReactNode;
  labelClassName?: string;
};

export type FormProps = ComponentPropsWithoutRef<'form'>;
