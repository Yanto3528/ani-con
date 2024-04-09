import { ReactNode } from 'react';

import { Sidebar } from '@/components/common/Sidebar';

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div className="flex">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
