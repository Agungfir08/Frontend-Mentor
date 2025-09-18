import { useQuery } from '@tanstack/react-query';
import { useCtx } from './useCtx';
import { fetchWeatherForecast } from '@/api/weatherForecastService';

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
