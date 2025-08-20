import { getCountryByAlphaCode } from '@/app/lib/action';
import Link from 'next/link';

export default async function CountryButton({ name }: { name: string }) {
    const country = await getCountryByAlphaCode(name);
    console.log('country name :', country.name.official);
    return (
        <Link
            href={`/country/${country?.name.official}`}
            className="bg-white text-grey-950 dark:bg-blue-900 dark:text-white text-2xl lg:text-sm font-light rounded-sm py-3 lg:py-1 w-full md:max-w-40 lg:max-w-24 text-center truncate px-1.5 shadow-md">
            {country.name.common || name}
        </Link>
    );
}
