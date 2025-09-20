import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { formatLocationName } from '@/lib/utils';
import { useCtx } from '@/hooks/useCtx';
import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
} from '@/components/ui/command';
import {
    Popover,
    PopoverAnchor,
    PopoverContent,
} from '@/components/ui/popover';
import { CommandEmpty } from 'cmdk';

interface InputSearchProps {
    isLoading: boolean;
    data: { results: GeocodingResult[] } | undefined;
    setQuery: (query: string) => void;
}

function InputSearch({ isLoading, data, setQuery }: InputSearchProps) {
    const { setSelectedLocation } = useCtx();
    const [searchTerm, setSearchTerm] = useState('');
    const [open, setOpen] = useState<boolean>(false);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!searchTerm.trim()) return;
        setQuery(searchTerm);
        setOpen(true);
    };

    const handleSelectLocation = (location: GeocodingResult) => {
        setSelectedLocation({
            latitude: location.latitude,
            longitude: location.longitude,
            name: location.name,
            country: location.country ?? '',
        });
        setSearchTerm('');
        setOpen(false);
    };

    return (
        <div className="flex justify-center">
            <form
                onSubmit={handleSearch}
                className="flex flex-col md:flex-row gap-3 md:gap-4 items-center max-lg:w-full">
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverAnchor asChild>
                        <div className="relative w-full lg:w-[526px] lg:shrink-0">
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
                        </div>
                    </PopoverAnchor>
                    <PopoverContent
                        className="w-[var(--radix-popover-trigger-width)] border-none bg-transparent p-0"
                        align="center"
                        onOpenAutoFocus={(e) => e.preventDefault()}>
                        <Command className="bg-neutral-800 border border-neutral-700 p-2">
                            <CommandList>
                                {isLoading ? (
                                    <div className="flex items-center gap-2.5 px-3 py-2.5">
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
                                    <>
                                        <CommandEmpty className="body-base text-neutral-0 px-3 py-2.5">
                                            No result
                                        </CommandEmpty>
                                        {data?.results && (
                                            <CommandGroup>
                                                {data?.results?.map(
                                                    (result) => (
                                                        <CommandItem
                                                            key={result.id}
                                                            onSelect={() =>
                                                                handleSelectLocation(
                                                                    result
                                                                )
                                                            }
                                                            value={result.id.toString()}
                                                            className="cursor-pointer">
                                                            <span className="truncate">
                                                                {formatLocationName(
                                                                    result
                                                                )}
                                                            </span>
                                                        </CommandItem>
                                                    )
                                                )}
                                            </CommandGroup>
                                        )}
                                    </>
                                )}
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>

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
