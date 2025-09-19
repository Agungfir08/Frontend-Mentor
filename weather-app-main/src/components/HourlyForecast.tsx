import { useState } from 'react';
import { DropdownButton } from './DropdownButton';
import { Button } from './ui/button';
import { Skeleton } from './ui/skeleton';
import { getArrayOfDaysName, getTime, reformatHourlyData } from '@/lib/utils';
import DropdownRadioButton from './DropdownRadioButton';
import HourlyForecastCard from './forecast/HourlyForecastCard';

interface HourlyForecastProps {
    data?: WeatherData['hourly'];
    isLoading: boolean;
}

export default function HourlyForecast({
    data,
    isLoading,
}: HourlyForecastProps) {
    if (isLoading || !data) {
        return (
            <div className="bg-neutral-800 p-6 space-y-4 rounded-[20px]">
                <div className="flex items-center justify-between">
                    <h2 className="body-xl text-neutral-0">Hourly forecast</h2>
                    <DropdownButton
                        trigger={
                            <Button className="bg-neutral-600">
                                -
                                <img
                                    src="/images/icon-dropdown.svg"
                                    alt="icon dropdown button"
                                    className="size-3.5 md:size-4"
                                />
                            </Button>
                        }>
                        {' '}
                    </DropdownButton>
                </div>
                <div className="flex flex-col gap-4">
                    {Array.from({ length: 8 }).map((_, idx) => (
                        <Skeleton
                            key={idx}
                            className="bg-neutral-700 border border-neutral-600 rounded-lg h-[60px] w-full"
                        />
                    ))}
                </div>
            </div>
        );
    }

    const daysName = getArrayOfDaysName(data.time);
    const dataReformat = reformatHourlyData(data);

    const [idxOfDayName, setIdxOfDayName] = useState<number>(0);

    const dayOption = daysName.map((day, index) => ({
        label: day,
        value: String(index),
    }));

    const handleChangeDay = (value: string) => {
        setIdxOfDayName(Number(value));
    };

    return (
        <section className="bg-neutral-800 p-6 space-y-4 rounded-[20px]">
            <div className="flex items-center justify-between">
                <h2 className="body-xl text-neutral-0">Hourly forecast</h2>
                <DropdownButton
                    trigger={
                        <Button className="bg-neutral-600">
                            {daysName[idxOfDayName]}
                            <img
                                src="/images/icon-dropdown.svg"
                                alt="icon dropdown button"
                                className="size-3.5 md:size-4"
                            />
                        </Button>
                    }>
                    <DropdownRadioButton
                        value={String(idxOfDayName)}
                        options={dayOption}
                        onValueChange={handleChangeDay}
                    />
                </DropdownButton>
            </div>
            <div className="flex flex-col gap-4 max-h-[595px] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none]">
                {dataReformat.time[idxOfDayName].map((time, index) => {
                    const temperature =
                        dataReformat.temperature_2m[idxOfDayName][index];
                    const weatherCode =
                        dataReformat.weather_code[idxOfDayName][index];

                    return (
                        <HourlyForecastCard
                            key={index}
                            weatherCode={weatherCode}
                            temperature={temperature}
                            time={getTime(time)}
                        />
                    );
                })}
            </div>
        </section>
    );
}
