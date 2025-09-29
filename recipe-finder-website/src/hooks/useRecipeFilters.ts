import { useState } from 'react';

export function useRecipeFilters() {
    const [prepTime, setPrepTime] = useState<number | null>(null);
    const [cookTime, setCookTime] = useState<number | null>(null);

    const clearPrepTime = () => setPrepTime(null);
    const clearCookTime = () => setCookTime(null);

    return {
        prepTime,
        setPrepTime,
        cookTime,
        setCookTime,
        clearPrepTime,
        clearCookTime,
    };
}
