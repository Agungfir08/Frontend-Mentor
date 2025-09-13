import React, { useMemo, useState } from 'react';
import {
    ExtensionsContext,
    type Data,
    type FilterType,
} from './ExtensionsContext';
import dataJson from '../../data.json';

function ExtensionsProvider({ children }: { children: React.ReactNode }) {
    const [data, setData] = useState<Data[]>(dataJson);
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const [filter, setFilter] = useState<FilterType>('all');

    const changeDarkMode = () => {
        setDarkMode((prev) => !prev);
        document.body.classList.toggle('dark');
    };

    const changeActiveExtension = (name: string) => {
        setData((prev) =>
            prev.map((ext) =>
                ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
            )
        );
    };

    const changeFilter = (newFilter: FilterType) => {
        setFilter(newFilter);
    };

    const filteredData = useMemo(() => {
        if (filter === 'active') return data.filter((ext) => ext.isActive);
        if (filter === 'inactive') return data.filter((ext) => !ext.isActive);
        return data;
    }, [filter, data]);

    const removeExtension = (name: string) => {
        setData((prev) => prev.filter((ext) => ext.name !== name));
    };

    const value = {
        data: filteredData,
        darkMode,
        filter,
        changeFilter,
        changeDarkMode,
        changeActiveExtension,
        removeExtension,
    };

    return (
        <ExtensionsContext.Provider value={value}>
            {children}
        </ExtensionsContext.Provider>
    );
}

export default ExtensionsProvider;
