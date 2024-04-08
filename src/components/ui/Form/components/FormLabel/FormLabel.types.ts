import { ComponentPropsWithoutRef } from 'react';

import { VariantProps } from '@/lib/tailwind-variant';

import { formLabelStyles } from './FormLabel.styles';

type FormLabelStylesProps = VariantProps<typeof formLabelStyles>;

export type FormLabelProps = FormLabelStylesProps & ComponentPropsWithoutRef<'label'>;
