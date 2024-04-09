import Link from 'next/link';

import { paths } from '@/constants/paths.constants';

export function Logo() {
  return (
    <div>
      <Link href={paths.main.app()} className="font-bold">
        AniCon
      </Link>
    </div>
  );
}
