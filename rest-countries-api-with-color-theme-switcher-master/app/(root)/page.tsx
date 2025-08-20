import { DropDownButton } from '@/components/button';
import Card from '@/components/country/card';
import { SearchInput } from '@/components/input';
import { getCountries } from '../lib/action';
import { Suspense } from 'react';
import { CardSkeleton } from '@/components/skeleton';
import Pagination from '@/components/pagination';
import NotFound from './not-found';

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
    const { data: countries, totalPages } = await getCountries(
        country,
        page,
        region
    );

    return (
        <div className="py-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-12 md:gap-5">
                <SearchInput />
                <DropDownButton />
            </div>

            {countries.length === 0 ? (
                <div className="flex min-h-[calc(100vh-331px)] md:min-h-[calc(100vh-296px)] lg:min-h-[calc(100vh-204px)] justify-center">
                    <NotFound />
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10">
                        {countries?.map((country: Country, index: number) => (
                            <Suspense key={index} fallback={<CardSkeleton />}>
                                <Card
                                    flag={country.flag}
                                    name={country.name}
                                    population={country.population}
                                    region={country.region}
                                    capital={country.capital}
                                />
                            </Suspense>
                        ))}
                    </div>
                    <div className="mt-8 flex w-full justify-center">
                        <Pagination totalPages={totalPages} />
                    </div>
                </>
            )}
        </div>
    );
}
