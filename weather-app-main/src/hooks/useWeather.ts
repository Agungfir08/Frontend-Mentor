import { useQuery } from '@tanstack/react-query';
import { useCtx } from './useCtx';
import type { SelectedLocationType } from '@/context/AppContext';
import { fetchWeatherForecast } from '@/api/weatherForecastService';

export function useWeather(
    coordinate: Pick<SelectedLocationType, 'latitude' | 'longitude'>
) {
    const { temperature, windSpeed, precipitation } = useCtx();

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
                      coordinate.latitude,
                      coordinate.longitude,
                      temperature,
                      windSpeed,
                      precipitation
                  )
                : null,
        enabled: !!coordinate,
    });
}
