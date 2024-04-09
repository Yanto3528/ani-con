'use client';

import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { Link } from '@tiptap/extension-link';
import { Placeholder } from '@tiptap/extension-placeholder';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { createLowlight, common } from 'lowlight';
import { twMerge } from 'tailwind-merge';

import { FormErrorMessage, FormLabel } from '../Form';

import { EditorToolbar } from './components/EditorToolbar';
import { TextEditorProps } from './TextEditor.types';

const lowlight = createLowlight(common);

export function TextEditor({
  value,
  label,
  labelClassName,
  error,
  placeholder,
  onChange,
  disabled,
  wrapperClassName,
}: TextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({ openOnClick: false }),
      Placeholder.configure({ placeholder }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: value,
    onUpdate: ({ editor: updateEditor }) => {
      const inputValue = updateEditor.getHTML();

      onChange?.(inputValue);
    },
  });

  return (
    <div>
      {label && <FormLabel className={labelClassName}>{label}</FormLabel>}
      <div className="relative">
        <div
          className={twMerge(
            'rounded-md border border-gray-200 bg-white px-3 pb-3 flex flex-col gap-2 relative',
            error && 'border-error',
            wrapperClassName
          )}
        >
          {editor && <EditorToolbar editor={editor} />}
          <EditorContent
            className="text-editor prose prose-p:my-0"
            editor={editor}
            disabled={disabled}
          />
        </div>
      </div>
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </div>
  );
}
