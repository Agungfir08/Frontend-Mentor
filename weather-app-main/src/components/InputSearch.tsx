import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useLocationSearch } from '@/hooks/useWeather';
import { formatLocationName } from '@/lib/utils';

function InputSearch() {
    const [searchTerm, setSearchTerm] = useState('');
    const [query, setQuery] = useState('');
    const [open, setOpen] = useState<boolean>(false);

    const { data, isLoading } = useLocationSearch(query);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!searchTerm.trim()) return;
        setQuery(searchTerm);
        setOpen(true);
    };

    return (
        <div className="w-full max-w-[526px] mx-auto">
            <form
                onSubmit={handleSearch}
                className="flex flex-col md:flex-row gap-3 md:gap-4 items-center">
                <div className="relative w-full">
                    <img
                        src="/images/icon-search.svg"
                        alt="icon seacrh"
                        className="absolute size-5 top-1/2 -translate-y-1/2 left-6 text-slate-600"
                    />

                    <Input
                        type="text"
                        placeholder="Search for a place..."
                        className="pl-[60px]"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {open && (
                        <div className="z-10 absolute top-[65px] left-0 right-0 bg-neutral-800 border border-neutral-700 p-2 rounded-xl">
                            {isLoading ? (
                                <div className="flex items-center gap-2.5">
                                    <img
                                        src="/images/icon-loading.svg"
                                        alt="loading icon"
                                        className="animate-spin"
                                    />
                                    <p className="body-base text-neutral-0">
                                        Search in progress
                                    </p>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-1 max-h-[200px] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none]">
                                    {data?.results.map((data, index) => (
                                        <Button
                                            key={index}
                                            align="start"
                                            onClick={() => setOpen(false)}>
                                            {formatLocationName(data)}
                                        </Button>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <Button
                    type="submit"
                    variant="secondary"
                    className="max-md:w-full">
                    Search
                </Button>
            </form>
        </div>
    );
}

export default InputSearch;
