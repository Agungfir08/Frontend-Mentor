import { useQuery } from '@tanstack/react-query';
import { useCtx } from './useCtx';
import { fetchWeatherForecast } from '@/api/weatherForecastService';
import { fetchReverseGeocoding } from '@/api/reverseGeocodingService';
import { fetchGeocoding } from '@/api/geocodingService';

export function useWeather() {
    const { selectedLocation, unitSettings } = useCtx();
    const { temperature, windSpeed, precipitation } = unitSettings;

    return useQuery({
        queryKey: [
            'Weather',
            selectedLocation,
            temperature,
            windSpeed,
            precipitation,
        ],
        queryFn: () =>
            selectedLocation
                ? fetchWeatherForecast(
                      selectedLocation,
                      temperature,
                      windSpeed,
                      precipitation
                  )
                : null,
        enabled: !!selectedLocation?.latitude && !!selectedLocation.longitude,
    });
}

export function useLocationSearch(query: string) {
    return useQuery({
        queryKey: ['Search', query],
        queryFn: () => fetchGeocoding(query),
        enabled: !!query,
    });
}

export function useReverseGeocoding() {
    const { selectedLocation } = useCtx();
    return useQuery({
        queryKey: ['Location', selectedLocation],
        queryFn: () =>
            selectedLocation ? fetchReverseGeocoding(selectedLocation) : null,
        enabled: !!selectedLocation?.latitude && !!selectedLocation.longitude,
    });
}
