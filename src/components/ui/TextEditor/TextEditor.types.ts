import { FormElementProps } from '../Form';

export type TextEditorProps = FormElementProps & {
  value: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  isLoading?: boolean;
  loadingText?: string;
};
