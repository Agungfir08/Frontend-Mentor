import { getCountryByAlpha3Code } from '@/app/lib/action';
import Link from 'next/link';

export default async function CountryButton({ name }: { name: string }) {
    const country = await getCountryByAlpha3Code(name);
    return (
        <Link
            href={`/country/${country?.name}`}
            className="bg-white text-grey-950 dark:bg-blue-900 dark:text-white text-2xl lg:text-sm font-light rounded-sm py-3 lg:py-1 w-[192px] lg:w-[96px] text-center truncate px-1.5">
            {country?.name || name}
        </Link>
    );
}
