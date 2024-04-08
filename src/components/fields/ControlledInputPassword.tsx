'use client';

import { Controller, FieldValues } from 'react-hook-form';

import { InputPassword } from '@/components/ui/InputPassword';
import type { InputPasswordProps } from '@/components/ui/InputPassword/InputPassword.types';
import { BaseControlledFieldProps } from '@/types/fields.types';
import { getFormErrorMessage } from '@/utils/form.utils';

type Props<T extends FieldValues> = BaseControlledFieldProps<T> & InputPasswordProps;

export function ControlledInputPassword<T extends FieldValues>({
  control,
  errors,
  name,
  ...props
}: Props<T>) {
  return (
    <Controller
      render={({ field: { value, ...otherFieldProps } }) => (
        <InputPassword
          {...otherFieldProps}
          {...props}
          value={value || ''}
          error={getFormErrorMessage(errors, name)}
        />
      )}
      name={name}
      control={control}
    />
  );
}
