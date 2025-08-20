import { getCountries } from '@/app/lib/action';
import Card from './country/card';
import Pagination from './pagination';
import NotFound from '@/app/(root)/not-found';

export default async function CountriesGrid({
    page,
    country,
    region,
}: {
    page: number;
    country: string;
    region: string;
}) {
    const { data: countries, totalPages } = await getCountries(
        page,
        country,
        region
    );

    if (!countries || countries.length === 0) {
        return <NotFound />;
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10">
                {countries?.map((country: Country, index: number) => (
                    <Card
                        key={index}
                        flag={country.flags}
                        name={country.name}
                        population={country.population}
                        region={country.region}
                        capital={country.capital[0]}
                    />
                ))}
            </div>
            <div className="mt-8 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </>
    );
}
