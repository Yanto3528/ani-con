'use client';

import { LoginForm } from '@/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <div className="mt-0 sm:mt-20 flex justify-center sm:px-4">
      <div className="rounded-xl flex flex-col max-sm:justify-center text-center bg-white px-6 py-12 max-sm:min-h-[100dvh] sm:shadow-md max-w-[500px]">
        <h1 className="text-2xl mb-1">Welcome back!</h1>
        <p className="mb-6 text-gray-500 px-12 text-sm">
          Sign in to connect with other anime lovers in the world
        </p>
        <LoginForm />
      </div>
    </div>
  );
}
