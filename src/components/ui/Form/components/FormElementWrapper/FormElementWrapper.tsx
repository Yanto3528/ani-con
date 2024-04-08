import { ComponentPropsWithoutRef } from 'react';

import { BaseFormElementWrapperProps } from '../../Form.types';

import { elementWrapperStyles } from './FormElementWrapper.styles';

interface FormElementWrapperProps
  extends ComponentPropsWithoutRef<'div'>,
    BaseFormElementWrapperProps {}

export function FormElementWrapper({
  children,
  className,
  error,
  disabled,
  colorScheme,
  size,
  radius,
  ...props
}: FormElementWrapperProps) {
  return (
    <div
      className={elementWrapperStyles({
        disabled,
        size,
        colorScheme: error ? 'error' : colorScheme,
        radius,
        className,
      })}
      {...props}
    >
      {children}
    </div>
  );
}
