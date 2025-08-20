'use client';

import clsx from 'clsx';
import { Moon, Sun, ChevronDown, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export function DarkModeButton() {
    const [mounted, setMounted] = useState<boolean>(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <button
            className="flex items-center text-md lg:text-base font-semibold text-gray-950 dark:text-white cursor-pointer"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? (
                <Sun className="mr-2 size-4" />
            ) : (
                <Moon className="mr-2 size-4 " />
            )}
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
}

export function DropDownButton() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const regions = [
        'All Regions',
        'Africa',
        'Americas',
        'Asia',
        'Europe',
        'Oceania',
    ];

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const isActiveFilter = (region: string) => {
        return (
            searchParams.get('region') === region ||
            (region === 'all regions' && !searchParams.get('region'))
        );
    };

    const handleRegionFilterChange = (region: string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        if (region && region !== 'all regions') {
            params.set('region', region);
        } else {
            params.delete('region');
        }
        replace(`${pathname}?${params.toString()}`);
        setIsOpen(false);
    };

    return (
        <div className="relative w-[248px]">
            <button
                className="flex items-center justify-between w-full text-md font-semibold text-gray-950 dark:text-white bg-white dark:bg-blue-900 px-7 py-4.5 rounded-lg shadow-md cursor-pointer"
                onClick={() => setIsOpen((prev) => !prev)}>
                <span className="mr-3">Filter by Region</span>

                <ChevronDown
                    className={clsx(
                        'text-grey-950 dark:text-white size-4 transition-transform ease-in-out duration-300',
                        {
                            'rotate-180': isOpen,
                        }
                    )}
                />
            </button>

            <div
                className={clsx(
                    'absolute left-0 top-[110%] right-0 scale-y-0 opacity-0 origin-top transition-all ease-in-out duration-300',
                    {
                        'scale-y-100 opacity-100': isOpen,
                    }
                )}>
                <ul className="w-full h-auto shadow-md rounded-md px-7 py-4.5 bg-white dark:bg-blue-900 space-y-1">
                    {regions.map((title, index) => (
                        <li
                            key={index}
                            className={clsx(
                                `text-base font-semibold cursor-pointer hover:bg-gray-100 dark:hover:bg-grey-50/10 py-1.5 px-2 rounded-sm`,
                                {
                                    'bg-gray-100 dark:bg-grey-50/10':
                                        isActiveFilter(title.toLowerCase()),
                                }
                            )}
                            onClick={() =>
                                handleRegionFilterChange(title.toLowerCase())
                            }>
                            {title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export function BackButton() {
    const router = useRouter();

    return (
        <button
            className="flex items-center text-base  md:text-[28px] lg:text-base font-semibold text-grey-950 dark:text-white cursor-pointer py-2 px-10 bg-white dark:bg-blue-900 rounded-md shadow-md w-fit"
            onClick={() => router.back()}>
            <ArrowLeft className="mr-2 size-4" />
            Back
        </button>
    );
}
