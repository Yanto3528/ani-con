import {
  ChangeEventHandler,
  HTMLProps,
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';

import { Editor, BubbleMenu } from '@tiptap/react';
import { Link2Icon, Link2OffIcon, PencilIcon } from 'lucide-react';

import { useToggle } from '@/hooks/common/use-toggle';

import { Button } from '../../Button/Button';
import { Input } from '../../Input';
import { Modal } from '../../Modal';
import { toolbarItemStyles } from '../TextEditor.styles';

type LinkMenuProps = {
  editor: Editor;
};

const DelayAutoFocusInput = ({ ...rest }: HTMLProps<HTMLInputElement>) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // @ts-expect-error - we can pass ref, but it is just error in types
  return <Input ref={inputRef} {...rest} />;
};

export function LinkMenu({ editor }: LinkMenuProps) {
  const [isModalOpen, modalOpenToggle] = useToggle();
  const [href, setHref] = useState('');

  const onOpenModal = () => {
    setHref(editor.getAttributes('link').href || '');
    modalOpenToggle.open();
  };

  const onLinkClick = () => {
    if (editor.isActive('link')) {
      editor.chain().focus().unsetLink().run();
      return;
    }

    onOpenModal();
  };

  const onRemoveLink = () => {
    editor.chain().focus().extendMarkRange('link').unsetLink().run();
    modalOpenToggle.close();
  };

  const submitHref = () => {
    if (!href) {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      modalOpenToggle.close();
      return;
    }

    editor.chain().focus().extendMarkRange('link').setLink({ href }).run();
    modalOpenToggle.close();
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setHref(event.target.value);
  };

  const handleInputKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    const { code } = event;

    if (code === 'Enter') {
      submitHref();
      event.preventDefault();
    }

    if (code === 'Escape') {
      modalOpenToggle.close();
    }
  };

  const isActive = editor.isActive('link');
  const Icon = isActive ? Link2OffIcon : Link2Icon;

  return (
    <>
      <button
        type="button"
        onClick={onLinkClick}
        className={toolbarItemStyles({
          active: isActive,
        })}
        aria-label={isActive ? 'unlink' : 'link'}
      >
        <Icon className="w-5 h-5" />
      </button>
      <BubbleMenu
        className="bg-neutral-50 shadow-all-md p-1 flex gap-1 rounded-md"
        tippyOptions={{ duration: 150, zIndex: 100 }}
        editor={editor}
        shouldShow={({ editor: menuEditor, from, to }) =>
          // only show the bubble menu for links.
          from === to && menuEditor.isActive('link')
        }
      >
        <button
          type="button"
          className="p-1 rounded-md hover:bg-neutral-200 transition-all"
          onClick={onOpenModal}
          aria-label="Edit"
        >
          <PencilIcon className="text-neutral-950 w-5 h-5" />
        </button>
        <div className="w-[1px] bg-neutral-200" />
        <button
          type="button"
          className="p-1 rounded-md hover:bg-neutral-200 transition-all"
          onClick={onRemoveLink}
          aria-label="Unlink"
        >
          <Link2OffIcon className="text-neutral-950 w-5 h-5" />
        </button>
      </BubbleMenu>
      <Modal open={isModalOpen} onOpenChange={modalOpenToggle.set}>
        <Modal.Content title="Edit link">
          <DelayAutoFocusInput
            id="link"
            placeholder="URL"
            className="w-full"
            onChange={handleInputChange}
            value={href}
            onKeyDown={handleInputKeyDown}
          />
          <div className="flex items-center justify-end gap-2 mt-4">
            <Button
              onClick={modalOpenToggle.close}
              variant="outline"
              colorScheme="secondary"
              className="max-sm:flex-1"
            >
              Cancel
            </Button>
            <Button onClick={submitHref} className="max-sm:flex-1">
              Save
            </Button>
          </div>
        </Modal.Content>
      </Modal>
    </>
  );
}
