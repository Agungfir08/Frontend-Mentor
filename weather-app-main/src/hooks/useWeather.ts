import { useQuery } from '@tanstack/react-query';
import { useCtx } from './useCtx';
import { fetchWeatherForecast } from '@/api/weatherForecastService';
import { fetchReverseGeocoding } from '@/api/reverseGeocodingService';
import { fetchGeocoding } from '@/api/geocodingService';

export function useWeather(coordinate: Coordinate) {
    const { unitSettings } = useCtx();
    const { temperature, windSpeed, precipitation } = unitSettings;

    return useQuery({
        queryKey: [
            'Weather',
            coordinate,
            temperature,
            windSpeed,
            precipitation,
        ],
        queryFn: () =>
            coordinate
                ? fetchWeatherForecast(
                      coordinate,
                      temperature,
                      windSpeed,
                      precipitation
                  )
                : null,
        enabled: !!coordinate,
    });
}

export function useLocationSearch(query: string) {
    return useQuery({
        queryKey: ['Search', query],
        queryFn: () => fetchGeocoding(query),
        enabled: !!query,
    });
}

export function useReverseGeocoding(coordinate: Coordinate) {
    return useQuery({
        queryKey: ['Location', coordinate],
        queryFn: () => fetchReverseGeocoding(coordinate),
        enabled: !!coordinate,
    });
}
