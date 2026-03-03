'use client';

import { usePathname } from 'next/navigation';
import { Input } from './ui/input';

const Header = () => {
    const pathName = usePathname();
    return (
        <header className="bg-neutral-0 flex w-full items-center justify-between px-8 h-[81] border-b-2 border-neutral-200 capitalize">
            <h1 className="text-xl font-bold -trcaking-[0.3px] leading-[120%]">
                {pathName.slice(1).replace('-', ' ')}
            </h1>
            <div>
                <Input type="search" placeholder="Search notes" />
            </div>
        </header>
    );
};

export default Header;
