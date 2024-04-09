import { EllipsisVerticalIcon } from 'lucide-react';

import { Avatar } from '@/components/ui/Avatar';
import { auth } from '@/lib/auth';

export async function SidebarFooter() {
  const session = await auth();

  if (!session?.user) {
    return null;
  }

  return (
    <div className="px-4 py-3 flex items-center gap-2 justify-between border-t border-gray-200">
      <div className="flex items-center gap-2">
        <Avatar fallback={session?.user.name || ''} src={session.user.image || ''} />
        <div className="">
          <p className="font-medium text-sm line-clamp-1">{session.user.name}</p>
        </div>
      </div>
      <div>
        <EllipsisVerticalIcon className="w-5 h-5" />
      </div>
    </div>
  );
}
