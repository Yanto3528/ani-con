import Link from 'next/link';

import { LoginForm } from '@/components/auth/LoginForm';
import { paths } from '@/constants/paths.constants';

export default function LoginPage() {
  return (
    <main className="mt-0 sm:mt-20 flex justify-center sm:px-4">
      <div className="rounded-xl flex flex-col max-sm:justify-center text-center bg-white px-6 py-12 max-sm:min-h-[100dvh] sm:shadow-md w-[500px]">
        <h1 className="text-2xl mb-1">Welcome back!</h1>
        <p className="mb-6 text-gray-500 px-12 text-sm">
          Sign in to connect with other anime lovers in the world
        </p>
        <LoginForm />
        <div className="mt-4">
          <p className="text-sm">
            Don&apos;t have an account yet?{' '}
            <Link
              href={paths.auth.register()}
              className="text-primary underline underline-offset-4"
            >
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
