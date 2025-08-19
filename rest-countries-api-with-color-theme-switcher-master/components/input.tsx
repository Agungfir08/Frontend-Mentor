'use client';

import { Search } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export function SearchInput() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = (term: string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="relative grow">
            <input
                type="text"
                placeholder="Search for a country..."
                className="text-base bg-white text-gray-950 dark:bg-blue-900 dark:text-white font-semibold tracking-tighter py-4.5 pl-14 pr-4 rounded-lg w-full md:max-w-[480px] shadow-md"
                onChange={(e) => handleSearch(e.target.value)}
                defaultValue={searchParams.get('query')?.toString()}
            />

            <Search className="absolute top-1/2 left-5 -translate-y-1/2 text-gray-400 dark:text-white size-5" />
        </div>
    );
}
