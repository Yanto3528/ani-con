import { formLabelStyles } from './FormLabel.styles';
import { FormLabelProps } from './FormLabel.types';

export function FormLabel({ children, className, required, htmlFor, ...props }: FormLabelProps) {
  return (
    <label className={formLabelStyles({ required, className })} htmlFor={htmlFor} {...props}>
      {children}
    </label>
  );
}
