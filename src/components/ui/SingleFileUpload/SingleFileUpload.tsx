/* eslint-disable @next/next/no-img-element */

'use client';

import { forwardRef, useCallback } from 'react';

import { useDropzone } from '@uploadthing/react';
import { TrashIcon, UploadIcon } from 'lucide-react';

import { toast } from '@/components/ui/Toast';
import { useUploadThing } from '@/lib/uploadthing';

import { Button } from '../Button';
import { FormErrorMessage, FormLabel } from '../Form';
import { Spinner } from '../Spinner';

import { uploadFileRootStyles } from './SingleFileUpload.styles';
import { SingleFileUploadProps } from './SingleFileUpload.types';

const accept = {
  'image/png': ['.png'],
  'image/jpeg': ['.jpeg'],
  'image/jpg': ['.jpg'],
};

export const SingleFileUpload = forwardRef<HTMLInputElement, SingleFileUploadProps>(
  ({ value, onChange, maxFileSize = 2, disabled, error, label, name }, ref) => {
    const { startUpload, isUploading } = useUploadThing('imageUploader', {
      onClientUploadComplete: (res) => {
        onChange(res[0].url);
      },
    });

    const onDrop = useCallback(
      async (acceptedFiles: File[]) => {
        const selectedFile = acceptedFiles[0];
        const selectedFileSizeInMB = selectedFile.size / 1024 / 1204;
        if (maxFileSize && selectedFileSizeInMB > maxFileSize) {
          toast.error(`File size must be less than ${maxFileSize} MB`);
          return;
        }

        startUpload([selectedFile]);
      },
      [maxFileSize, startUpload]
    );

    const { getRootProps, getInputProps } = useDropzone({
      onDrop,
      accept,
      disabled: disabled || isUploading,
    });

    const onDeleteFile = useCallback(() => {
      onChange(undefined);
    }, [onChange]);

    return (
      <div>
        {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
        {value ? (
          <div className="relative">
            <img src={value} alt={value} className="w-full aspect-[9/6] object-cover" />
            <Button
              onClick={onDeleteFile}
              className="absolute top-4 right-4"
              size="icon"
              colorScheme="danger"
            >
              <TrashIcon className="w-5 h-5" />
            </Button>
          </div>
        ) : (
          <div {...getRootProps()}>
            <input ref={ref} name={name} {...getInputProps()} />
            <div className={uploadFileRootStyles({ error: !!error, isUploading })}>
              <UploadIcon className="w-8 h-8" />
              <h4 className="mt-4 mb-1">Drop files or Select file</h4>
              <span>Supported file types .png, .jpg, .jpeg</span>
              {isUploading && (
                <div className="absolute inset-0 bg-white/80 flex flex-col gap-2 items-center justify-center rounded-lg">
                  <Spinner />
                  <p className="font-semibold">Uploading...</p>
                </div>
              )}
            </div>
          </div>
        )}
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
      </div>
    );
  }
);
