import { useFormContext } from 'react-hook-form';

import { ControlledInput } from '@/components/fields/ControlledInput';
import { ControlledSingleFileUpload } from '@/components/fields/ControlledSingleFileUpload';
import { ControlledTextEditor } from '@/components/fields/ControlledTextEditor';
import { CreatePostFormValues } from '@/types/form.types';

export function PostFormFields() {
  const {
    control,
    formState: { errors },
  } = useFormContext<CreatePostFormValues>();

  return (
    <div className="flex flex-col gap-4">
      <ControlledSingleFileUpload
        control={control}
        name="coverImage"
        label="Cover image"
        errors={errors}
      />
      <ControlledInput
        control={control}
        name="title"
        placeholder="Enter post title"
        label="Post title"
        errors={errors}
      />
      <ControlledTextEditor
        control={control}
        name="content"
        label="Content"
        placeholder="Enter post content"
      />
    </div>
  );
}
