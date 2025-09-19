import { getWeatherImage } from '@/lib/utils';

interface WeatherInfoCardProps {
    temperature: number;
    weatherCode: number;
    date: string;
    location: string;
}

function WeatherInfoCard({
    temperature,
    weatherCode,
    date,
    location,
}: WeatherInfoCardProps) {
    const { src: imgSrc, alt: altImg } = getWeatherImage(weatherCode);

    return (
        <div className="relative h-[286px] w-full flex flex-col items-center overflow-hidden rounded-[20px] max-md:py-[41px] px-6">
            <div className="absolute inset-0 m-0 h-full w-full overflow-hidden bg-transparent bg-[url('/images/bg-today-small.svg')] md:bg-[url('/images/bg-today-large.svg')] bg-no-repeat bg-cover bg-center"></div>
            <div className="relative flex flex-col md:flex-row items-center gap-4 md:w-full md:justify-between md:my-auto ">
                <div className="flex flex-col items-center md:items-start gap-3">
                    <h2 className="heading-4 text-neutral-0">{location}</h2>
                    <p className="body-lg text-neutral-0/80">{date}</p>
                </div>
                <div className="flex items-center gap-5">
                    <img src={imgSrc} alt={altImg} className="size-[120px]" />
                    <h2 className="heading text-neutral-0">{`${Math.round(
                        temperature
                    )}°`}</h2>
                </div>
            </div>
        </div>
    );
}

export default WeatherInfoCard;
