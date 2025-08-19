import { getCountryByName } from '@/app/lib/action';
import { BackButton } from '@/components/button';
import CountryButton from '@/components/country/countryButton';
import Image from 'next/image';

export default async function Page({
    params,
}: {
    params: Promise<{ name: string }>;
}) {
    const countryName = decodeURIComponent((await params).name);

    const country = await getCountryByName(countryName);

    console.log('country ', country);

    return (
        <div className="py-8 space-y-10">
            <BackButton />
            <div className="flex flex-col lg:flex-row lg:items-center gap-20 lg:gap-32 ">
                <Image
                    src={country?.flag}
                    alt={`Flag of ${country?.name}`}
                    width={200}
                    height={100}
                    className="w-full max-w-[640px] mx-auto lg:max-w-[560px] h-auto lg:max-h-[400px] object-cover"
                />

                <div className="w-full space-y-12 lg:space-y-7">
                    <h2 className="text-[44px] lg:text-[32px] font-extrabold tracking-tight">
                        {country?.name}
                    </h2>
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between text-[28px] lg:text-base gap-20 lg:gap-10">
                        <div className="space-y-7 lg:space-y-2.5">
                            <p>
                                <span className="font-semibold tracking-tight">
                                    Native Name:
                                </span>{' '}
                                {country?.nativeName}
                            </p>
                            <p>
                                <span className="font-semibold tracking-tight">
                                    Population:
                                </span>{' '}
                                {country?.population.toLocaleString()}
                            </p>
                            <p>
                                <span className="font-semibold tracking-tight">
                                    Region:
                                </span>{' '}
                                {country?.region}
                            </p>
                            <p>
                                <span className="font-semibold tracking-tight">
                                    Sub Region:
                                </span>{' '}
                                {country?.subregion}
                            </p>
                            <p>
                                <span className="font-semibold">Capital:</span>{' '}
                                {country?.capital}
                            </p>
                        </div>
                        <div className="space-y-7 lg:space-y-2.5">
                            <p>
                                <span className="font-semibold tracking-tight">
                                    Top Level Domain:
                                </span>{' '}
                                {country?.topLevelDomain}
                            </p>
                            <p>
                                <span className="font-semibold tracking-tight">
                                    Currencies:
                                </span>{' '}
                                {country?.currencies
                                    ?.map((currency: Currency) => currency.name)
                                    .join(', ')}
                            </p>
                            <p>
                                <span className="font-semibold tracking-tight">
                                    Languages:
                                </span>{' '}
                                {country?.languages
                                    ?.map((language: Language) => language.name)
                                    .join(', ')}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 w-full">
                        {country?.borders?.map(
                            (border: string, index: number) => (
                                <CountryButton key={index} name={border} />
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
