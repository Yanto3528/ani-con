'use client';

import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  label: string;
  icon: LucideIcon;
  href: string;
};

export function NavItem({ label, icon: Icon, href }: Props) {
  const pathname = usePathname();

  const isActive = pathname.includes(href);

  return (
    <Link
      href={href}
      data-active={isActive || undefined}
      className="p-2 flex items-center gap-3 hover:bg-primary-100 hover:text-primary group rounded-md data-[active]:bg-primary-100 data-[active]:text-primary transition-all"
    >
      <Icon className="w-5 h-5" />
      <span className="text-sm group-hover:text-shadow-bold group-data-[active]:text-shadow-bold">
        {label}
      </span>
    </Link>
  );
}
