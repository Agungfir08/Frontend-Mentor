import { MultiStepContext } from '@/context/MultiStepContext';
import { useContext } from 'react';

export function useMultiStepContext() {
    const ctx = useContext(MultiStepContext);

    if (!ctx) {
        throw new Error(
            'useMultiStepContext must be used within a MultiStepProvider'
        );
    }

    return ctx;
}
