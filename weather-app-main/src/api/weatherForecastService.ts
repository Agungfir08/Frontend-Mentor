import { fetchWeatherApi } from 'openmeteo';
import { API_CONFIG } from './apiConfig';
import type {
    PrecipitationType,
    TemperatureType,
    WindSpeedType,
} from '@/context/AppContext';

export const fetchWeatherForecast = async (
    lat: number,
    long: number,
    temperature: TemperatureType,
    windSpeed: WindSpeedType,
    precipitation: PrecipitationType
) => {
    const api = `${API_CONFIG.WEATHER_FORECAST_URL}`;

    const params = {
        latitude: lat,
        longitude: long,
        daily: [
            'weather_code',
            'temperature_2m_max',
            'apparent_temperature_max',
        ],
        hourly: ['temperature_2m', 'weather_code'],
        current: [
            'temperature_2m',
            'precipitation',
            'weather_code',
            'wind_speed_10m',
            'apparent_temperature',
        ],
        wind_speed_unit: windSpeed,
        temperature_unit: temperature,
        precipitation_unit: precipitation,
    };

    const responses = await fetchWeatherApi(api, params);

    const response = responses[0];

    const utcOffsetSeconds = response.utcOffsetSeconds();
    const current = response.current()!;
    const hourly = response.hourly()!;
    const daily = response.daily()!;

    const weatherData = {
        current: {
            time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
            temperature_2m: current.variables(0)!.value(),
            precipitation: current.variables(1)!.value(),
            weather_code: current.variables(2)!.value(),
            wind_speed_10m: current.variables(3)!.value(),
            apparent_temperature: current.variables(4)!.value(),
        },
        hourly: {
            time: [
                ...Array(
                    (Number(hourly.timeEnd()) - Number(hourly.time())) /
                        hourly.interval()
                ),
            ].map(
                (_, i) =>
                    new Date(
                        (Number(hourly.time()) +
                            i * hourly.interval() +
                            utcOffsetSeconds) *
                            1000
                    )
            ),
            temperature_2m: hourly.variables(0)!.valuesArray(),
            weather_code: hourly.variables(1)!.valuesArray(),
        },
        daily: {
            time: [
                ...Array(
                    (Number(daily.timeEnd()) - Number(daily.time())) /
                        daily.interval()
                ),
            ].map(
                (_, i) =>
                    new Date(
                        (Number(daily.time()) +
                            i * daily.interval() +
                            utcOffsetSeconds) *
                            1000
                    )
            ),
            weather_code: daily.variables(0)!.valuesArray(),
            temperature_2m_max: daily.variables(1)!.valuesArray(),
            apparent_temperature_max: daily.variables(2)!.valuesArray(),
        },
    };

    return weatherData;
};
