'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { ControlledInput } from '@/components/fields/ControlledInput';
import { ControlledInputPassword } from '@/components/fields/ControlledInputPassword';
import { Button } from '@/components/ui/Button';
import { defaultLoggedInRedirectRoute } from '@/constants/routes.constants';
import GithubIcon from '@/public/icons/github.svg';
import { loginSchema } from '@/schemas/auth.schema';

type FormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit(() => {
    console.log('adlj');
  });

  const signInWithGithub = () => {
    signIn('github', {
      callbackUrl: defaultLoggedInRedirectRoute,
    });
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <ControlledInput
        control={control}
        name="email"
        type="email"
        placeholder="Enter your email"
        label="Email"
        errors={errors}
      />
      <ControlledInputPassword
        control={control}
        name="password"
        placeholder="Enter your password"
        label="Password"
        errors={errors}
      />
      <Button type="submit" className="mt-6">
        Login
      </Button>
      <div className="relative my-6">
        <hr className="w-full text-gray-200" />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 bg-white font-medium text-sm text-gray-400">
          OR
        </span>
      </div>
      <Button
        onClick={signInWithGithub}
        variant="outline"
        className="enabled:hover:bg-gray-50 border-gray-200 gap-4 text-gray-800 enabled:hover:text-gray-800"
      >
        <Image src={GithubIcon} alt="github" width={24} height={24} />
        Sign in with Github
      </Button>
    </form>
  );
}
