import { DropDownButton } from '@/components/button';
import Card from '@/components/country/card';
import { SearchInput } from '@/components/input';
import { getCountries } from '../lib/action';
import { Suspense } from 'react';
import { CardSkeleton } from '@/components/skeleton';
import Pagination from '@/components/pagination';

export default async function Home(props: {
    searchParams?: Promise<{
        query?: string;
        page?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const page = Number(searchParams?.page) || 1;
    const { data: countries, totalPages } = await getCountries(query, page);
    return (
        <div className="py-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-12 md:gap-5">
                <SearchInput />
                <DropDownButton
                    items={[
                        { title: 'Africa' },
                        { title: 'America' },
                        { title: 'Asia' },
                        { title: 'Europe' },
                        { title: 'Oceania' },
                    ]}
                />
            </div>
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
        </div>
    );
}
