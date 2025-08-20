import { getCountryByName } from '@/app/lib/action';
import { BackButton } from '@/components/button';
import CountryDetails from '@/components/country/countryDetails';
import { CountryDetailsSkeleton } from '@/components/skeleton';
import { Suspense } from 'react';

export default async function Page({
    params,
}: {
    params: Promise<{ name: string }>;
}) {
    const countryName = decodeURIComponent((await params).name);

    const country = await getCountryByName(countryName);

    return (
        <div className="pb-8 pt-20 space-y-20">
            <BackButton />
            <Suspense fallback={<CountryDetailsSkeleton />}>
                <CountryDetails country={country} />
            </Suspense>
        </div>
    );
}
