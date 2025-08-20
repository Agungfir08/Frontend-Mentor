import Image from 'next/image';
import InfoItem from './infoItem';
import CountryButton from './countryButton';

export default function CountryDetails({
    country,
}: {
    country: CountryDetail;
}) {
    return (
        <div className="flex flex-col xl:flex-row lg:items-center gap-20 lg:gap-32 ">
            <Image
                src={country?.flag}
                alt={`Flag of ${country?.name}`}
                width={200}
                height={100}
                className="w-full max-w-[640px] mx-auto lg:max-w-[560px] h-auto lg:max-h-[400px] object-cover shadow-lg"
            />

            <div className="w-full space-y-12 lg:space-y-7">
                <h2 className="text-3xl md:text-[44px] lg:text-[32px] font-extrabold tracking-tight">
                    {country?.name}
                </h2>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between text-xl md:text-[28px] lg:text-base gap-20 lg:gap-10">
                    <div className="space-y-7 lg:space-y-2.5">
                        <InfoItem
                            label="Native Name"
                            value={country?.nativeName}
                        />
                        <InfoItem
                            label="Population"
                            value={country?.population.toLocaleString()}
                        />
                        <InfoItem label="Region" value={country?.region} />
                        <InfoItem
                            label="Sub Region"
                            value={country?.subregion}
                        />
                        <InfoItem label="Capital" value={country?.capital} />
                    </div>
                    <div className="space-y-7 lg:space-y-2.5">
                        <InfoItem
                            label="Top Level Domain"
                            value={country?.topLevelDomain?.join(', ')}
                        />
                        <InfoItem
                            label="Currencies"
                            value={country?.currencies
                                ?.map((currency: Currency) => currency.name)
                                .join(', ')}
                        />
                        <InfoItem
                            label="Languages"
                            value={country?.languages
                                ?.map((language: Language) => language.name)
                                .join(', ')}
                        />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-3.5 mt-20 ">
                    <p className="shrink-0 text-[22px] md:text-[32px] lg:text-base font-semibold tracking-tight">
                        Border Countries:
                    </p>
                    <div className="flex flex-wrap gap-5 lg:gap-2.5 grow">
                        {country?.borders?.length > 0 ? (
                            country?.borders?.map(
                                (border: string, index: number) => (
                                    <CountryButton key={index} name={border} />
                                )
                            )
                        ) : (
                            <p>No border countries</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
