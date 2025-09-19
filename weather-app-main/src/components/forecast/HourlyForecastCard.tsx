import { getWeatherImage } from '@/lib/utils';

interface HourlyForecastCardProps {
    weatherCode: number;
    time: string;
    temperature: number;
}

function HourlyForecastCard({
    weatherCode,
    time,
    temperature,
}: HourlyForecastCardProps) {
    const { src: imgSrc, alt: altImg } = getWeatherImage(weatherCode);

    return (
        <div className="bg-neutral-700 border border-neutral-600 py-2.5 pl-3 pr-4 rounded-lg flex items-center justify-between max-h-[60px]">
            <div className="flex items-center gap-2">
                <img src={imgSrc} alt={altImg} className="size-10" />
                <p className="body-xl-medium text-neutral-0">{time}</p>
            </div>
            <p className="body-base text-neutral-0">{`${Math.round(
                temperature
            )}°`}</p>
        </div>
    );
}

export default HourlyForecastCard;
