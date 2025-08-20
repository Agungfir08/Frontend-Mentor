import Image from 'next/image';
import Link from 'next/link';
import InfoItem from './infoItem';

export default function Card({
    flag,
    name,
    population,
    region,
    capital,
}: Country) {
    return (
        <Link href={`/country/${name}`}>
            <article className="bg-white dark:bg-blue-900 text-grey-950 dark:text-white shadow-lg rounded-md overflow-hidden cursor-pointer">
                <div>
                    <Image
                        src={flag}
                        alt={`${name} flag`}
                        width={330}
                        height={200}
                        className="w-full h-[200px] md:h-[180px] object-cover"
                        priority
                    />
                </div>
                <div className="p-8">
                    <h2 className="text-2xl tracking-tighter font-extrabold mb-5 w-full truncate">
                        {name}
                    </h2>
                    <div className="space-y-2 text-base">
                        <InfoItem
                            label="Population"
                            value={population.toLocaleString()}
                        />
                        <InfoItem label="Region" value={region} />
                        <InfoItem label="Capital" value={capital || '-'} />
                    </div>
                </div>
            </article>
        </Link>
    );
}
