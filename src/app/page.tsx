import Link from 'next/link';

import { paths } from '@/contansts/paths.contants';
import { auth, signOut } from '@/lib/auth';

export default async function Home() {
  const session = await auth();

  return (
    <div className="">
      <pre>{JSON.stringify(session)}</pre>
      {!session?.user && <Link href={paths.auth.login()}>Login</Link>}
      <form
        action={async () => {
          'use server';

          await signOut();
        }}
      >
        <button type="submit">Sign out</button>
      </form>
    </div>
  );
}
