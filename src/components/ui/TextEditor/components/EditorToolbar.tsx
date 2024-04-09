import { useMemo } from 'react';

import { Editor } from '@tiptap/react';
import {
  BoldIcon,
  CodeIcon,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  Heading4Icon,
  Heading5Icon,
  Heading6Icon,
  HeadingIcon,
  ItalicIcon,
  ListIcon,
  ListOrderedIcon,
  QuoteIcon,
} from 'lucide-react';
import { twMerge } from 'tailwind-merge';

import { DropdownMenu } from '../../DropdownMenu';
import { toolbarItemStyles } from '../TextEditor.styles';

import { LinkMenu } from './LinkMenu';

type EditorToolbarProps = {
  editor: Editor;
};

export function EditorToolbar({ editor }: EditorToolbarProps) {
  const toolbarItems = useMemo(
    () => [
      {
        name: 'heading',
        icon: HeadingIcon,
        items: [
          {
            name: 'Heading1',
            icon: Heading1Icon,
            command: () => editor.chain().toggleHeading({ level: 1 }).focus().run(),
          },
          {
            name: 'Heading2',
            icon: Heading2Icon,
            command: () => editor.chain().toggleHeading({ level: 2 }).focus().run(),
          },
          {
            name: 'Heading3',
            icon: Heading3Icon,
            command: () => editor.chain().toggleHeading({ level: 3 }).focus().run(),
          },
          {
            name: 'Heading4',
            icon: Heading4Icon,
            command: () => editor.chain().toggleHeading({ level: 4 }).focus().run(),
          },
          {
            name: 'Heading5',
            icon: Heading5Icon,
            command: () => editor.chain().toggleHeading({ level: 5 }).focus().run(),
          },
          {
            name: 'Heading6',
            icon: Heading6Icon,
            command: () => editor.chain().toggleHeading({ level: 6 }).focus().run(),
          },
        ],
      },
      {
        name: 'bold',
        icon: BoldIcon,
        command: () => editor.chain().toggleBold().focus().run(),
      },
      {
        name: 'italic',
        icon: ItalicIcon,
        command: () => editor.chain().toggleItalic().focus().run(),
      },
      {
        name: 'bulletList',
        icon: ListIcon,
        command: () => editor.chain().toggleBulletList().focus().run(),
      },
      {
        name: 'orderedList',
        icon: ListOrderedIcon,
        command: () => editor.chain().toggleOrderedList().focus().run(),
      },
      {
        name: 'blockquote',
        icon: QuoteIcon,
        command: () => editor.chain().toggleBlockquote().focus().run(),
      },
      {
        name: 'codeblock',
        icon: CodeIcon,
        command: () => editor.chain().toggleCodeBlock().focus().run(),
      },
    ],
    [editor]
  );

  return (
    <div className="relative">
      <ul className="flex items-center gap-1 py-4">
        {toolbarItems.map(({ icon: Icon, command, name, items }) => {
          if (items) {
            return (
              <li key={name}>
                <DropdownMenu>
                  <DropdownMenu.Trigger asChild>
                    <button
                      type="button"
                      className={toolbarItemStyles({
                        active: editor.isActive(name),
                      })}
                      aria-label={`toggle ${name}`}
                    >
                      <Icon className="w-4 h-4" />
                    </button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content>
                    {items.map(
                      ({ icon: ItemIcon, name: itemName, command: itemCommand }, itemIndex) => (
                        <DropdownMenu.Item
                          key={itemName}
                          onClick={itemCommand}
                          className={twMerge(
                            editor.isActive(name, { level: itemIndex + 1 }) && 'bg-gray-100'
                          )}
                          icon={<ItemIcon className="w-4 h-4" />}
                        >
                          {itemName}
                        </DropdownMenu.Item>
                      )
                    )}
                  </DropdownMenu.Content>
                </DropdownMenu>
              </li>
            );
          }

          return (
            <li key={name}>
              <button
                type="button"
                onClick={command}
                className={toolbarItemStyles({
                  active: editor.isActive(name),
                })}
                aria-label={`toggle ${name}`}
              >
                <Icon className="w-4 h-4" />
              </button>
            </li>
          );
        })}
        <li>
          <LinkMenu editor={editor} />
        </li>
      </ul>
    </div>
  );
}
