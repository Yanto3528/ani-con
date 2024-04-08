import { Spinner } from '../Spinner';

import { buttonStyles } from './Button.styles';
import { ButtonProps } from './Button.types';

export function Button({
  children,
  size,
  colorScheme,
  radius,
  variant,
  className,
  loading,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonStyles({
        size,
        variant,
        colorScheme,
        radius,
        className,
      })}
      type="button"
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Spinner colorScheme={variant === 'outline' ? 'inherit' : 'white'} size="sm" />}
      {children}
    </button>
  );
}
