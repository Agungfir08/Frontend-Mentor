interface Coordinate {
    latitude: number;
    longitude: number;
}

type TemperatureType = 'celsius' | 'fahrenheit';

type WindSpeedType = 'kmh' | 'mph';

type PrecipitationType = 'mm' | 'inch';

interface UnitSettings {
    temperature: TemperatureType;
    windSpeed: WindSpeedType;
    precipitation: PrecipitationType;
}

interface WeatherData {
    current: {
        time: Date;
        temperature_2m: number;
        precipitation: number;
        weather_code: number;
        wind_speed_10m: number;
        apparent_temperature: number;
        humidity: number;
    };
    daily: {
        time: Date[];
        weather_code: Float32Array<ArrayBufferLike> | null;
        temperature_2m_max: Float32Array<ArrayBufferLike> | null;
        temperature_2m_min: Float32Array<ArrayBufferLike> | null;
    };
    hourly: {
        time: Date[];
        temperature_2m: Float32Array<ArrayBufferLike> | null;
        weather_code: Float32Array<ArrayBufferLike> | null;
    };
}

interface HourlyDataReformat {
    time: Date[][];
    temperature_2m: number[][];
    weather_code: number[][];
}

interface GeocodingResult {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    elevation?: number;
    feature_code?: string;
    country_code: string;
    admin1_id?: number;
    admin2_id?: number;
    admin3_id?: number;
    admin4_id?: number;
    timezone?: string;
    population?: number;
    postcodes?: string[];
    country_id?: number;
    country?: string;
    admin1?: string;
    admin2?: string;
    admin3?: string;
    admin4?: string;
}
