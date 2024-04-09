'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';

import { createPostSchema } from '@/schemas/posts.schema';
import { CreatePostFormValues } from '@/types/form.types';

import { PostFormFields } from './components/PostFormFields';

export function PostForm() {
  const methods = useForm<CreatePostFormValues>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      coverImage: undefined,
      title: '',
      content: '',
    },
  });

  return (
    <form className="grid grid-cols-12 gap-3">
      <FormProvider {...methods}>
        <div className="col-span-6">
          <PostFormFields />
        </div>
        <div className="col-span-6">Preview</div>
      </FormProvider>
    </form>
  );
}
