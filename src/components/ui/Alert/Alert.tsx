import { ComponentPropsWithoutRef } from 'react';

import { CheckCircleIcon, CircleAlert } from 'lucide-react';

import { VariantProps } from '@/lib/tailwind-variant';

import { alertStyles } from './Alert.styles';

type AlertStylesProps = VariantProps<typeof alertStyles>;
type AlertProps = ComponentPropsWithoutRef<'div'> & AlertStylesProps;

const AlertIcon = {
  success: CheckCircleIcon,
  error: CircleAlert,
};

export function Alert({ variant, children, className, ...props }: AlertProps) {
  const Icon = variant ? AlertIcon[variant] : AlertIcon.success;

  return (
    <div role="alert" className={alertStyles({ variant, className })} {...props}>
      <Icon />
      <span className="font-medium">{children}</span>
    </div>
  );
}
