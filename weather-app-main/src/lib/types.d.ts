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
