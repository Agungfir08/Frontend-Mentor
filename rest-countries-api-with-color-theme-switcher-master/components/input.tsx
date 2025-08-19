import { Search } from 'lucide-react';

export function SearchInput() {
    return (
        <div className="relative grow">
            <input
                type="text"
                placeholder="Search for a country..."
                className="text-base bg-white text-gray-950 dark:bg-blue-900 dark:text-white font-semibold tracking-tighter py-4.5 pl-14 pr-4 rounded-lg w-full md:max-w-[480px] shadow-md"
            />

            <Search className="absolute top-1/2 left-5 -translate-y-1/2 text-gray-400 dark:text-white size-5" />
        </div>
    );
}
