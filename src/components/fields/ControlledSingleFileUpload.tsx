'use client';

import { Controller, FieldValues } from 'react-hook-form';

import { SingleFileUpload } from '@/components/ui/SingleFileUpload';
import type { SingleFileUploadProps } from '@/components/ui/SingleFileUpload/SingleFileUpload.types';
import { BaseControlledFieldProps } from '@/types/fields.types';
import { getFormErrorMessage } from '@/utils/form.utils';

type Props<T extends FieldValues> = BaseControlledFieldProps<T> &
  Omit<SingleFileUploadProps, 'value' | 'onChange'>;

export function ControlledSingleFileUpload<T extends FieldValues>({
  control,
  errors,
  name,
  ...props
}: Props<T>) {
  return (
    <Controller
      render={({ field: { value, ...otherFieldProps } }) => (
        <SingleFileUpload
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
