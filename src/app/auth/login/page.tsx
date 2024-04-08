'use client';

import { signIn } from 'next-auth/react';

import { paths } from '@/contansts/paths.contants';

export default function LoginPage() {
  const signInWithGithub = () => {
    signIn('github', {
      callbackUrl: paths.home(),
    });
  };

  return (
    <form className="h-screen w-full flex flex-col items-center justify-center">
      <div>
        <button onClick={signInWithGithub} type="button">
          Login with Github
        </button>
      </div>
    </form>
  );
}
