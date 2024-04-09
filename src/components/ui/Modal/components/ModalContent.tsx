import { Portal, Overlay, Content, Close, Title, DialogContentProps } from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

import { Button } from '../../Button';

type ModalContentProps = DialogContentProps & {
  title?: string;
  headerClassName?: string;
  titleClassName?: string;
  hideClose?: boolean;
  overlayClassName?: string;
};

export function ModalContent({
  children,
  title,
  className,
  headerClassName,
  titleClassName,
  hideClose,
  overlayClassName,
  ...props
}: ModalContentProps) {
  return (
    <Portal>
      <Overlay
        className={twMerge(
          'radix-state-open:fade-in radix-state-open:animate-in radix-state-closed:animate-out radix-state-closed:fade-out backdrop-blur-sm fixed inset-0 z-[1000] flex items-center justify-center p-4',
          overlayClassName
        )}
      >
        <Content
          className={twMerge(
            'max-h-[85vh] w-[95vw] max-w-[450px] rounded-lg bg-white focus:outline-none shadow-md p-6 radix-state-open:animate-modal-scale-in radix-state-closed:animate-modal-scale-out opacity-0',
            className
          )}
          {...props}
        >
          <div className={twMerge('flex items-center justify-between gap-2 mb-6', headerClassName)}>
            {title && (
              <Title asChild>
                <h2 className={titleClassName}>{title}</h2>
              </Title>
            )}
            {!hideClose && (
              <Close asChild>
                <Button
                  aria-label="close modal"
                  size="icon"
                  variant="outline"
                  colorScheme="secondary"
                  className="p-1"
                >
                  <XIcon className="w-5 h-5" />
                </Button>
              </Close>
            )}
          </div>
          {children}
        </Content>
      </Overlay>
    </Portal>
  );
}
