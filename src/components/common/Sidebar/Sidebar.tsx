import { BellIcon } from 'lucide-react';

import { Button } from '@/components/ui/Button';

import { Logo } from '../Logo';

import { NavItemList } from './components/NavItemList';
import { SidebarFooter } from './components/SidebarFooter';

export function Sidebar() {
  return (
    <>
      <aside className="w-[250px] border-r border-gray-200 flex flex-col fixed top-0 bottom-0">
        <div className="px-4 flex items-center justify-between h-16 border-b border-gray-200">
          <Logo />
          <Button variant="outline" colorScheme="secondary" size="icon">
            <BellIcon className="w-4 h-4" />
          </Button>
        </div>
        <NavItemList />
        <SidebarFooter />
      </aside>
      <div className="w-[250px]" />
    </>
  );
}
