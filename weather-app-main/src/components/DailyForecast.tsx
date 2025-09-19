import { getDay } from '@/lib/utils';
import DailyForecastCard from './forecast/DailyForecastCard';
import { Skeleton } from './ui/skeleton';

interface DailyForecastProps {
    isLoading: boolean;
    data?: WeatherData['daily'];
}

function DailyForecast({ isLoading, data }: DailyForecastProps) {
    if (isLoading || !data) {
        return (
            <section className="space-y-5 w-full">
                <h2 className="body-xl text-neutral-0">Daily forecast</h2>
                <div className="grid max-md:grid-cols-3 grid-cols-7 gap-4">
                    {Array.from({ length: 7 }).map((_, idx) => (
                        <Skeleton
                            key={idx}
                            className="bg-neutral-800 rounded-xl border border-neutral-600 h-[167px]"
                        />
                    ))}
                </div>
            </section>
        );
    }

    return (
        <section className="space-y-5 w-full">
            <h2 className="body-xl text-neutral-0">Daily forecast</h2>
            <div className="grid max-md:grid-cols-3 grid-cols-7 gap-4">
                {data.time.map((date, index) => {
                    const weatherCode = data.weather_code?.[index] ?? -1;
                    const maxTemp = data.temperature_2m_max?.[index] ?? 0;
                    const minTemp = data.temperature_2m_min?.[index] ?? 0;

                    return (
                        <DailyForecastCard
                            key={index}
                            day={getDay(date)}
                            weatherCode={weatherCode}
                            maxTemperature={maxTemp}
                            minTemperature={minTemp}
                        />
                    );
                })}
            </div>
        </section>
    );
}

export default DailyForecast;
