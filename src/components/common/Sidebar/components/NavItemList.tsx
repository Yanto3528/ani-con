'use client';

import { HomeIcon, MessageSquareIcon } from 'lucide-react';

import { paths } from '@/constants/paths.constants';

import { NavItem } from './NavItem';

const navItems = [
  {
    label: 'Home',
    icon: HomeIcon,
    href: paths.main.app(),
  },
  {
    label: 'Messages',
    icon: MessageSquareIcon,
    href: paths.main.messages(),
  },
];

export function NavItemList() {
  return (
    <nav className="py-4 flex-1">
      <ul className="space-y-1 px-2">
        {navItems.map((navItem) => (
          <li key={navItem.label}>
            <NavItem {...navItem} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
