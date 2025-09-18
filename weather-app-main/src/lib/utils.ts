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
