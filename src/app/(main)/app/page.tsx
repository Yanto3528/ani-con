import { signOut } from '@/lib/auth';

export default function AppPage() {
  return (
    <div>
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
