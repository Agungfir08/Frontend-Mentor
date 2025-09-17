import { createContext } from 'react';

export type TemperatureType = 'celsius' | 'fahrenheit';
export type WindSpeedType = 'kmh' | 'mph';
export type PrecipitationType = 'mm' | 'inch';
export interface SelectedLocationType {
    latitude: number;
    longitude: number;
    name?: string;
    country?: string;
}

interface AppContextType {
    selectedLocation: SelectedLocationType | null;
    temperature: TemperatureType;
    windSpeed: WindSpeedType;
    precipitation: PrecipitationType;
    setSelectedLocation: (location: SelectedLocationType | null) => void;
    setTemperature: (temp: TemperatureType) => void;
    setWindSpeed: (wind: WindSpeedType) => void;
    setPrecipitation: (precipitation: PrecipitationType) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);
