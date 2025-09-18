import Error from '@/components/Error';
import InputSearch from '@/components/InputSearch';
import { WeatherInfoSkeleton } from '@/components/Skeleton';
import WeatherDetailCard from '@/components/WeatherDetailCard';
import WeatherInfoCard from '@/components/WeatherInfoCard';
import { useCtx } from '@/hooks/useCtx';
import useLocation from '@/hooks/useLocation';
import { useWeather } from '@/hooks/useWeather';
import { formatDate } from '@/lib/utils';

function MainPage() {
    const { location, error: locationError, getLocation } = useLocation();
    const {
        data,
        error: weatherError,
        refetch,
        isLoading,
    } = useWeather(location);
    const { unitSettings } = useCtx();

    console.log(data);

    if (locationError) {
        return <Error errorMsg={locationError} onClickRetry={getLocation} />;
    }

    if (weatherError) {
        return (
            <Error
                errorMsg="We couldn’t connect to the server (API error). Please try again in a few moments."
                onClickRetry={refetch}
            />
        );
    }

    return (
        <>
            <h1 className="heading-2 text-neutral-0 text-center">
                How's the sky looking today?
            </h1>
            <div className="mt-12 lg:mt-16">
                <InputSearch />
                <div className="mt-8">
                    <div>
                        {isLoading || !data ? (
                            <WeatherInfoSkeleton />
                        ) : (
                            <WeatherInfoCard
                                temperature={data.current.temperature_2m}
                                weatherCode={data.current.weather_code}
                                date={formatDate(data.current.time)}
                            />
                        )}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mt-5">
                            <WeatherDetailCard
                                label="Feels Like"
                                value={
                                    isLoading || !data
                                        ? '–'
                                        : `${Math.round(
                                              data.current.apparent_temperature
                                          )}°`
                                }
                            />
                            <WeatherDetailCard
                                label="Humidity"
                                value={
                                    isLoading || !data
                                        ? '–'
                                        : `${Math.round(
                                              data.current.humidity
                                          )}%`
                                }
                            />
                            <WeatherDetailCard
                                label="Wind"
                                value={
                                    isLoading || !data
                                        ? '–'
                                        : `${Math.round(
                                              data.current.wind_speed_10m
                                          )} ${
                                              unitSettings.windSpeed === 'kmh'
                                                  ? 'k/mh'
                                                  : 'mph'
                                          }`
                                }
                            />
                            <WeatherDetailCard
                                label="Precipitation"
                                value={
                                    isLoading || !data
                                        ? '–'
                                        : `${data.current.precipitation} mm`
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainPage;
