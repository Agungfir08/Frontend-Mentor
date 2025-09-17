import { useMemo, useState } from 'react';
import {
    AppContext,
    type PrecipitationType,
    type SelectedLocationType,
    type TemperatureType,
    type WindSpeedType,
} from './AppContext';

export function AppProvider({ children }: { children: React.ReactNode }) {
    const [selectedLocation, setSelectedLocation] =
        useState<SelectedLocationType | null>(null);

    const [temperature, setTemperature] = useState<TemperatureType>('celsius');
    const [windSpeed, setWindSpeed] = useState<WindSpeedType>('kmh');
    const [precipitation, setPrecipitation] = useState<PrecipitationType>('mm');

    const value = useMemo(
        () => ({
            selectedLocation,
            temperature,
            windSpeed,
            precipitation,
            setSelectedLocation,
            setTemperature,
            setWindSpeed,
            setPrecipitation,
        }),
        [temperature, windSpeed, precipitation]
    );

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
