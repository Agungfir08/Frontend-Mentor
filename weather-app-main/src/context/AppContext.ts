import { createContext, type SetStateAction } from 'react';

export interface SelectedLocationType {
    latitude: number;
    longitude: number;
    name?: string;
    country?: string;
}

interface AppContextType {
    selectedLocation: SelectedLocationType | null;
    unitSettings: UnitSettings;
    isImperial: boolean;
    setSelectedLocation: (location: SelectedLocationType | null) => void;
    setUnitSettings: (setting: SetStateAction<UnitSettings>) => void;
    toggleImperial: () => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);
