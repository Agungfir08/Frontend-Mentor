import { useEffect, useState, type ReactNode } from 'react';
import { DarkModeContext } from './darkmode-context';

function DarkModeProvider({ children }: { children: ReactNode }) {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
        const dark = localStorage.getItem('darkMode');
        if (dark !== null) {
            return dark === 'true';
        }

        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        if (isDarkMode) document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');

        localStorage.setItem('darkMode', isDarkMode.toString());
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode((prev) => !prev);
    };

    const value = { isDarkMode, toggleDarkMode };
    return (
        <DarkModeContext.Provider value={value}>
            {children}
        </DarkModeContext.Provider>
    );
}

export default DarkModeProvider;
