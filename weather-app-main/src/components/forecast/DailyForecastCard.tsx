import { getWeatherImage } from '@/lib/utils';

interface DailyForecastCardProps {
    day: string;
    weatherCode: number;
    maxTemperature: number;
    minTemperature: number;
}

function DailyForecastCard({
    day,
    weatherCode,
    maxTemperature,
    minTemperature,
}: DailyForecastCardProps) {
    const { src: imgSrc, alt: altImg } = getWeatherImage(weatherCode);
    return (
        <div className="grow bg-neutral-800 py-4 px-2.5 rounded-xl border border-neutral-600 space-y-4">
            <h4 className="text-neutral-0 body-lg text-center">{day}</h4>
            <img src={imgSrc} alt={altImg} className="size-[60px] mx-auto" />
            <div className="flex items-center justify-between">
                <p className="body-base text-neutral-0">{`${Math.round(
                    maxTemperature
                )}°`}</p>
                <p className="body-base text-neutral-0">{`${Math.round(
                    minTemperature
                )}°`}</p>
            </div>
        </div>
    );
}

export default DailyForecastCard;
