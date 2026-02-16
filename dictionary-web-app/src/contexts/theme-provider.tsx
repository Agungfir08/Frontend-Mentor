import { useEffect, useState } from 'react';
import { ThemeContext } from './theme-context';

function ThemeProvider({ children }: { children: React.ReactNode }) {
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
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}

export default ThemeProvider;
