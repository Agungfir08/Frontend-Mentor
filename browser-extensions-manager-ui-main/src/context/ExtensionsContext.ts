import { createContext } from 'react';
import dataJson from '../../data.json';

export interface Data {
    name: string;
    logo: string;
    description: string;
    isActive: boolean;
}

export type FilterType = 'all' | 'active' | 'inactive';

interface ExtensionsContextType {
    data: Data[];
    darkMode: boolean;
    filter: FilterType;
    changeFilter: (filter: FilterType) => void;
    changeDarkMode: () => void;
    changeActiveExtension: (name: string) => void;
    removeExtension: (name: string) => void;
}

const INITAL_STATE: ExtensionsContextType = {
    data: dataJson,
    darkMode: false,
    filter: 'all',
    changeFilter: () => {},
    changeDarkMode: () => {},
    changeActiveExtension: () => {},
    removeExtension: () => {},
};

export const ExtensionsContext =
    createContext<ExtensionsContextType>(INITAL_STATE);
