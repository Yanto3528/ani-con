import { forwardRef } from 'react';

import { Eye, EyeOff } from 'lucide-react';

import { useToggle } from '@/hooks/common/use-toggle';

import { Input } from '../Input';

import { InputPasswordProps } from './InputPassword.types';

export const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>((props, ref) => {
  const [showContent, { toggle }] = useToggle();

  return (
    <div className="relative">
      <Input
        type={showContent ? 'text' : 'password'}
        ref={ref}
        rightElement={
          <button type="button" onClick={toggle}>
            {showContent ? <EyeOff size={20} /> : <Eye size={20} />}
            <div className="sr-only">Toggle show password</div>
          </button>
        }
        {...props}
      />
    </div>
  );
});
