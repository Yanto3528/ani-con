import {
  generateUploadButton,
  generateUploadDropzone,
  generateReactHelpers,
} from '@uploadthing/react';

import type { CustomFileRouter } from '@/app/api/uploadthing/core';

export const UploadButton = generateUploadButton<CustomFileRouter>();
export const UploadDropzone = generateUploadDropzone<CustomFileRouter>();
export const { useUploadThing } = generateReactHelpers<CustomFileRouter>();
