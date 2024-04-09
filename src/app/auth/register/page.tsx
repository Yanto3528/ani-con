import Link from 'next/link';

import { RegisterForm } from '@/components/auth/RegisterForm';
import { paths } from '@/constants/paths.constants';

export default function LoginPage() {
  return (
    <main className="mt-0 sm:my-10 flex justify-center sm:px-4">
      <div className="rounded-xl flex flex-col max-sm:justify-center text-center bg-white px-6 py-12 max-sm:min-h-[100dvh] sm:shadow-md w-[500px]">
        <h1 className="text-2xl mb-1">Welcome!</h1>
        <p className="mb-6 text-gray-500 px-12 text-sm">
          Sign up to join other anime lovers in the world
        </p>
        <RegisterForm />
        <div className="mt-4">
          <p className="text-sm">
            Already have an account?{' '}
            <Link href={paths.auth.login()} className="text-primary underline underline-offset-4">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
