'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar';
import Image from 'next/image';
import ChevronRightIcon from '@/assets/images/icon-chevron-right.svg';

interface MenuSidebarProps {
    href: string;
    children: React.ReactNode;
}

const MenuSidebar = ({ href, children }: MenuSidebarProps) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <SidebarMenuItem>
            <SidebarMenuButton
                className="group text-sm font-medium -tracking-[0.2px] leading-[120%]"
                isActive={isActive}
                asChild>
                <Link href={href}>
                    {children}
                    <Image
                        src={ChevronRightIcon}
                        alt="chevron right icon"
                        className="ml-auto group-data-[active=false]:opacity-0 group-data-[active=true]:opacity-100 transition-opacity duration-200"
                    />
                </Link>
            </SidebarMenuButton>
        </SidebarMenuItem>
    );
};

export default MenuSidebar;
