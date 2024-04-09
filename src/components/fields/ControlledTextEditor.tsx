'use client';

import { Controller, FieldValues } from 'react-hook-form';

import { TextEditor } from '@/components/ui/TextEditor';
import type { TextEditorProps } from '@/components/ui/TextEditor/TextEditor.types';
import { BaseControlledFieldProps } from '@/types/fields.types';
import { getFormErrorMessage } from '@/utils/form.utils';

type Props<T extends FieldValues> = BaseControlledFieldProps<T> &
  Omit<TextEditorProps, 'value' | 'onChange'>;

export function ControlledTextEditor<T extends FieldValues>({
  control,
  errors,
  name,
  ...props
}: Props<T>) {
  return (
    <Controller
      render={({ field: { value, onChange } }) => (
        <TextEditor
          {...props}
          value={value || ''}
          onChange={onChange}
          error={getFormErrorMessage(errors, name)}
        />
      )}
      name={name}
      control={control}
    />
  );
}
