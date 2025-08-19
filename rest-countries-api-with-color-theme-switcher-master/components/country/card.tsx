import Image from 'next/image';
import Link from 'next/link';

export default function Card({
    flag,
    name,
    population,
    region,
    capital,
}: Country) {
    return (
        <Link href={`/country/${name}`}>
            <article className="bg-white dark:bg-blue-900 text-grey-950 dark:text-white shadow-sm rounded-md max-w-[328px] md:max-w-[284px] overflow-hidden cursor-pointer">
                <div>
                    <Image
                        src={flag}
                        alt={`${name} flag`}
                        width={330}
                        height={200}
                        className="w-full h-[200px] md:h-[160px] object-cover"
                        priority
                    />
                </div>
                <div className="p-8">
                    <h2 className="text-2xl tracking-tighter font-extrabold mb-5 w-full truncate">
                        {name}
                    </h2>
                    <div className="space-y-2">
                        <p className="text-base">
                            <span className="font-semibold tracking-wide">
                                Population:
                            </span>{' '}
                            {population.toLocaleString()}
                        </p>
                        <p className="text-base">
                            <span className="font-semibold tracking-wide">
                                Region:
                            </span>{' '}
                            {region}
                        </p>
                        <p className="text-base">
                            <span className="font-semibold tracking-wide">
                                Capital:
                            </span>{' '}
                            {capital}
                        </p>
                    </div>
                </div>
            </article>
        </Link>
    );
}
