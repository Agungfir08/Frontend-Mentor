import { AppContext } from '@/context/AppContext';
import { useContext } from 'react';

export function useCtx() {
    const ctx = useContext(AppContext);

    if (!ctx) {
        throw new Error('should inside the provider');
    }

    return ctx;
}
