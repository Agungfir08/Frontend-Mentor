import { useMemo, useState } from 'react';
import { AppContext, type SelectedLocationType } from './AppContext';

export function AppProvider({ children }: { children: React.ReactNode }) {
    const METRIC_STATE_SETTINGS: UnitSettings = {
        temperature: 'celsius',
        windSpeed: 'kmh',
        precipitation: 'mm',
    };

    const IMPERIAL_STATE_SETTINGS: UnitSettings = {
        temperature: 'fahrenheit',
        windSpeed: 'mph',
        precipitation: 'inch',
    };

    const [selectedLocation, setSelectedLocation] =
        useState<SelectedLocationType | null>(null);
    const [unitSettings, setUnitSettings] = useState<UnitSettings>(
        METRIC_STATE_SETTINGS
    );
    const isImperial =
        JSON.stringify(unitSettings) ===
        JSON.stringify(IMPERIAL_STATE_SETTINGS);

    const toggleImperial = () => {
        setUnitSettings(
            isImperial ? METRIC_STATE_SETTINGS : IMPERIAL_STATE_SETTINGS
        );
    };

    const value = useMemo(
        () => ({
            selectedLocation,
            isImperial,
            unitSettings,
            setSelectedLocation,
            setUnitSettings,
            toggleImperial,
        }),
        [selectedLocation, isImperial, unitSettings]
    );

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
