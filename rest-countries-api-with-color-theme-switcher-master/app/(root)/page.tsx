import { DropDownButton } from '@/components/button';
import { SearchInput } from '@/components/input';
import { getCountries } from '../lib/action';
import { Suspense } from 'react';
import { CardSkeleton } from '@/components/skeleton';
import NotFound from './not-found';
import CountriesGrid from '@/components/countriesGrid';

export default async function Home(props: {
    searchParams?: Promise<{
        country?: string;
        region?: string;
        page?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    const country = searchParams?.country || '';
    const region = searchParams?.region || '';
    const page = Number(searchParams?.page) || 1;

    return (
        <div className="py-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-12 md:gap-5">
                <SearchInput />
                <DropDownButton />
            </div>

            <Suspense
                key={`countries-grid-${page}-${country}-${region}`}
                fallback={
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10">
                        {Array.from({ length: 8 }).map((_, index) => (
                            <CardSkeleton key={index} />
                        ))}
                    </div>
                }>
                <CountriesGrid page={page} country={country} region={region} />
            </Suspense>
        </div>
    );
}
