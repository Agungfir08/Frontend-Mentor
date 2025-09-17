import Header from '@/components/Header';
import InputSearch from '@/components/InputSearch';
import WeatherDetailCard from '@/components/WeatherDetailCard';
import WeatherInfoCard from '@/components/WeatherInfoCard';
import useLocation from '@/hooks/useLocation';
import { useWeather } from '@/hooks/useWeather';

function MainPage() {
    const { location } = useLocation();
    const { data } = useWeather(location);
    console.log(data);

    return (
        <div className=" max-w-[1440px] mx-auto px-4 pt-4 pb-12 md:px-7 md:pt-7 md:pb-20 lg:px-28 lg:pt-12">
            <Header />
            <main className="mt-12 lg:mt-16">
                <h1 className="heading-2 text-neutral-0 text-center">
                    How's the sky looking today?
                </h1>
                <div className="mt-12 lg:mt-16">
                    <InputSearch />
                    <div className="mt-8">
                        <div>
                            <WeatherInfoCard />
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mt-5">
                                <WeatherDetailCard />
                                <WeatherDetailCard />
                                <WeatherDetailCard />
                                <WeatherDetailCard />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default MainPage;
