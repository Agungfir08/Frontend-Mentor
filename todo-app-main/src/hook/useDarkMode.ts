import { useContext } from 'react';
import { DarkModeContext } from '../context/darkmode-context';

function useDarkMode() {
    const ctx = useContext(DarkModeContext);
    if (!ctx) {
        throw new Error('useDarkMode must be used within provider');
    }

    return ctx;
}

export default useDarkMode;
