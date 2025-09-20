import CurrentWeather from '@/components/CurrentWeather';
import DailyForecast from '@/components/DailyForecast';
import Error from '@/components/Error';
import HourlyForecast from '@/components/HourlyForecast';
import InputSearch from '@/components/InputSearch';
import { useCtx } from '@/hooks/useCtx';
import useLocation from '@/hooks/useLocation';
import {
    useLocationSearch,
    useReverseGeocoding,
    useWeather,
} from '@/hooks/useWeather';
import { useEffect, useState } from 'react';

function MainPage() {
    const { setSelectedLocation, selectedLocation } = useCtx();
    const { location, error: locationError, getLocation } = useLocation();
    const [query, setQuery] = useState('');

    const { data: searchData, isLoading: searchLoading } =
        useLocationSearch(query);
    const {
        data: weatherData,
        error: weatherError,
        refetch,
        isLoading,
    } = useWeather();
    const {
        data: locationData,
        error: reverseError,
        isLoading: loadingReverse,
    } = useReverseGeocoding();

    useEffect(() => {
        if (location) {
            setSelectedLocation((prev) => ({
                ...prev,
                latitude: location.latitude,
                longitude: location.longitude,
            }));
        }
    }, [location, setSelectedLocation]);

    if (locationError) {
        return <Error errorMsg={locationError} onClickRetry={getLocation} />;
    }

    if (weatherError || reverseError) {
        return (
            <Error
                errorMsg="We couldn’t connect to the server (API error). Please try again in a few moments."
                onClickRetry={refetch}
            />
        );
    }

    const noResultsFound =
        query && !searchLoading && searchData && !searchData.results;

    const locationName = selectedLocation?.name
        ? `${selectedLocation.name}, ${selectedLocation.country}`
        : `${locationData?.city}, ${locationData?.country}`;

    return (
        <>
            <h1 className="heading-2 text-neutral-0 text-center max-lg:max-w-[482px] mx-auto">
                How's the sky looking today?
            </h1>
            <div className="mt-12 lg:mt-16">
                <InputSearch
                    isLoading={searchLoading}
                    data={searchData}
                    setQuery={setQuery}
                />
                <div className="mt-8 grid xl:grid-cols-12 gap-8">
                    {noResultsFound ? (
                        <div className="col-span-full">
                            <h2 className="heading-4 text-neutral-0 text-center">
                                No search result found!
                            </h2>
                        </div>
                    ) : (
                        <>
                            <div className="space-y-12 xl:col-span-8">
                                <CurrentWeather
                                    location={locationName}
                                    isLoading={
                                        isLoading ||
                                        loadingReverse ||
                                        !weatherData?.current ||
                                        !locationData
                                    }
                                    data={weatherData?.current}
                                />
                                <DailyForecast
                                    isLoading={
                                        isLoading ||
                                        loadingReverse ||
                                        !weatherData?.daily
                                    }
                                    data={weatherData?.daily}
                                />
                            </div>
                            <div className="xl:col-span-4">
                                <HourlyForecast
                                    data={weatherData?.hourly}
                                    isLoading={
                                        isLoading ||
                                        loadingReverse ||
                                        !weatherData?.hourly
                                    }
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default MainPage;
