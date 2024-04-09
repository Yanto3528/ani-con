'use client';

/* eslint-disable @next/next/no-img-element */
import { SyntheticEvent, useState } from 'react';

import { avatarStyles } from './Avatar.styles';
import { AvatarProps } from './Avatar.types';

const getFallbackName = (name?: string) => {
  if (!name) {
    return '';
  }

  if (name.length <= 2) {
    return name;
  }

  const nameParts = name.split(' ');
  const slicedName = nameParts.length <= 2 ? nameParts : nameParts.slice(0, 2);
  return slicedName.map((word) => word?.[0]?.toUpperCase()).join('');
};

export function Avatar({
  src,
  size,
  className,
  defaultImage,
  fallback,
  alt,
  ...props
}: AvatarProps) {
  const [isError, setIsError] = useState(false);
  const fallbackName = getFallbackName(fallback);

  const onErrorLoadImage = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    setIsError(true);
    if (defaultImage) {
      // eslint-disable-next-line no-param-reassign
      event.currentTarget.src = defaultImage;
    }
  };

  const shouldRenderFallback = (isError || !src) && fallbackName;

  return (
    <div className="w-fit rounded-full bg-gray-100">
      {shouldRenderFallback ? (
        <div
          className={avatarStyles({
            size,
            className: 'border border-gray-200',
          })}
        >
          {fallbackName}
        </div>
      ) : (
        <img
          onError={onErrorLoadImage}
          className={avatarStyles({ size, className })}
          src={src || defaultImage}
          alt={alt}
          {...props}
        />
      )}
    </div>
  );
}
