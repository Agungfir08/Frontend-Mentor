import CurrentWeather from '@/components/CurrentWeather';
import DailyForecast from '@/components/DailyForecast';
import Error from '@/components/Error';
import HourlyForecast from '@/components/HourlyForecast';
import InputSearch from '@/components/InputSearch';
import useLocation from '@/hooks/useLocation';
import { useReverseGeocoding, useWeather } from '@/hooks/useWeather';

function MainPage() {
    const { location, error: locationError, getLocation } = useLocation();
    const {
        data,
        error: weatherError,
        refetch,
        isLoading,
    } = useWeather(location);
    const {
        data: dataLocation,
        error: reverseError,
        isLoading: loadingReverse,
    } = useReverseGeocoding(location);

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

    return (
        <>
            <h1 className="heading-2 text-neutral-0 text-center max-lg:max-w-[482px] mx-auto">
                How's the sky looking today?
            </h1>
            <div className="mt-12 lg:mt-16">
                <InputSearch />
                <div className="mt-8 grid xl:grid-cols-12 gap-8">
                    <div className="space-y-12 xl:col-span-8">
                        <CurrentWeather
                            location={`${dataLocation?.city}, ${dataLocation?.country}`}
                            isLoading={
                                isLoading ||
                                loadingReverse ||
                                !data?.current ||
                                !dataLocation
                            }
                            data={data?.current}
                        />
                        <DailyForecast
                            isLoading={
                                isLoading || loadingReverse || !data?.daily
                            }
                            data={data?.daily}
                        />
                    </div>
                    <div className="xl:col-span-4">
                        <HourlyForecast
                            data={data?.hourly}
                            isLoading={
                                isLoading || loadingReverse || !data?.hourly
                            }
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainPage;
