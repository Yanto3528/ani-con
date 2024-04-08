'server only';

import { db } from '@/lib/db';

export const getUserByEmail = (email: string) =>
  db.user.findUnique({
    where: { email },
  });
