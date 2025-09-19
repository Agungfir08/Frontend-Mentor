import { useCtx } from '@/hooks/useCtx';
import { WeatherInfoSkeleton } from './Skeleton';
import WeatherInfoCard from './weather/WeatherInfoCard';
import { formatDate } from '@/lib/utils';
import WeatherDetailCard from './weather/WeatherDetailCard';
import { Skeleton } from './ui/skeleton';

interface CurrentWeatherProps {
    data?: WeatherData['current'];
    isLoading: boolean;
    location: string;
}

function CurrentWeather({ isLoading, data, location }: CurrentWeatherProps) {
    const { unitSettings } = useCtx();

    if (isLoading || !data) {
        return (
            <div>
                <WeatherInfoSkeleton />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mt-5">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <Skeleton
                            key={idx}
                            className="h-[120px] w-full rounded-[20px] bg-neutral-800 border border-neutral-700"
                        />
                    ))}
                </div>
            </div>
        );
    }

    const details = [
        {
            label: 'Feels Like',
            value: `${Math.round(data.apparent_temperature)}°`,
        },
        {
            label: 'Humidity',
            value: `${Math.round(data.humidity)}%`,
        },
        {
            label: 'Wind',
            value: `${Math.round(data.wind_speed_10m)} ${
                unitSettings.windSpeed === 'kmh' ? 'km/h' : 'mph'
            }`,
        },
        {
            label: 'Precipitation',
            value: `${data.precipitation} ${
                unitSettings.precipitation === 'mm' ? 'mm' : 'in'
            }`,
        },
    ];

    return (
        <section>
            <WeatherInfoCard
                location={location}
                temperature={data.temperature_2m}
                weatherCode={data.weather_code}
                date={formatDate(data.time)}
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mt-5">
                {details.map((detail) => (
                    <WeatherDetailCard
                        key={detail.label}
                        label={detail.label}
                        value={detail.value}
                    />
                ))}
            </div>
        </section>
    );
}

export default CurrentWeather;
