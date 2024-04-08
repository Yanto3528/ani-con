import { VariantProps } from '@/lib/tailwind-variant';

import { spinnerStyles } from './Spinner.styles';

type SpinnerStylesProps = VariantProps<typeof spinnerStyles>;

export type SpinnerProps = SpinnerStylesProps & {
  className?: string;
};
