import { ComponentPropsWithoutRef } from 'react';

import { VariantProps } from '@/lib/tailwind-variant';

import { avatarStyles } from './Avatar.styles';

type AvatarStylesProps = VariantProps<typeof avatarStyles>;

export type AvatarProps = AvatarStylesProps &
  ComponentPropsWithoutRef<'img'> & {
    defaultImage?: string;
    fallback?: string;
  };
