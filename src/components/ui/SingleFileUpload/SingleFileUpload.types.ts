import { FormElementProps } from '../Form';

export type SingleFileUploadProps = FormElementProps & {
  value: string;
  onChange: (fileUrl: string | undefined) => void;
  maxFileSize?: number;
  disabled?: boolean;
  name?: string;
};
