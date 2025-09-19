import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatDate(dateInput: Date | string): string {
    const date = new Date(dateInput);

    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    };

    return date.toLocaleDateString('en-Us', options);
}

export function getDay(
    dateInput: Date | string,
    options: 'short' | 'long' = 'short'
): string {
    const date = new Date(dateInput);
    return date.toLocaleDateString('en-US', { weekday: options });
}

export function getTime(dateInput: Date | string): string {
    const date = new Date(dateInput);

    return date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        hour12: true,
    });
}

export function getArrayOfDaysName(datesInput: Date[]): string[] {
    const dates = datesInput.map((dateInput) => {
        return getDay(dateInput, 'long');
    });

    return [...new Set(dates)];
}

export function reformatHourlyData(
    data: WeatherData['hourly']
): HourlyDataReformat {
    const times = data.time;
    const temperatures = Array.from(data.temperature_2m ?? []);
    const weatherCodes = Array.from(data.weather_code ?? []);

    if (
        times.length !== temperatures.length ||
        times.length !== weatherCodes.length
    ) {
        console.error('the length are not equals');
        return { time: [], temperature_2m: [], weather_code: [] };
    }

    const groupedByDate: Record<
        string,
        {
            time: Date[];
            temperature_2m: number[];
            weather_code: number[];
        }
    > = {};

    times.forEach((time, idx) => {
        const date = new Date(time);
        const key = date.toISOString().split('T')[0];

        if (!groupedByDate[key]) {
            groupedByDate[key] = {
                time: [],
                temperature_2m: [],
                weather_code: [],
            };
        }

        groupedByDate[key].time.push(date);
        groupedByDate[key].temperature_2m.push(temperatures[idx]);
        groupedByDate[key].weather_code.push(weatherCodes[idx]);
    });

    const finalResult: HourlyDataReformat = {
        time: [],
        temperature_2m: [],
        weather_code: [],
    };

    Object.values(groupedByDate).forEach((dayData) => {
        finalResult.time.push(dayData.time);
        finalResult.temperature_2m.push(dayData.temperature_2m);
        finalResult.weather_code.push(dayData.weather_code);
    });

    return finalResult;
}

export function getWeatherImage(weatherCode: number): {
    src: string;
    alt: string;
} {
    if ([0, 1].includes(weatherCode)) {
        return { src: '/images/icon-sunny.webp', alt: 'sunny icon' };
    }
    if (weatherCode === 2) {
        return {
            src: '/images/icon-partly-cloudy.webp',
            alt: 'partly cloudy icon',
        };
    }
    if (weatherCode === 3) {
        return { src: '/images/icon-overcast.webp', alt: 'overcast icon' };
    }
    if ([45, 48].includes(weatherCode)) {
        return { src: '/images/icon-fog.webp', alt: 'fog icon' };
    }
    if ([51, 53, 55, 56, 57].includes(weatherCode)) {
        return { src: '/images/icon-drizzle.webp', alt: 'drizzle icon' };
    }
    if ([61, 63, 65, 66, 67, 80, 81, 82].includes(weatherCode)) {
        return { src: '/images/icon-rain.webp', alt: 'rain icon' };
    }
    if ([71, 73, 75, 77, 85, 86].includes(weatherCode)) {
        return { src: '/images/icon-snow.webp', alt: 'snow icon' };
    }
    if ([95, 96, 99].includes(weatherCode)) {
        return { src: '/images/icon-storm.webp', alt: 'storm icon' };
    }

    return { src: '/images/icon-sunny.webp', alt: 'sunny icon' };
}

export function formatLocationName(data: GeocodingResult) {
    const parts: string[] = [];

    if (data.admin4) parts.push(data.admin4);
    if (data.admin3) parts.push(data.admin3);
    if (data.admin2) parts.push(data.admin2);
    if (data.admin1) parts.push(data.admin1);
    if (data.country) parts.push(data.country);

    return parts.join(', ');
}
