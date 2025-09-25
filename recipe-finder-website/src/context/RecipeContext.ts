import type { RecipeResult } from '@/api/getRecipeService';
import { createContext } from 'react';

interface RecipeType {
    data: RecipeResult | undefined;
    isLoading: boolean;
    cookTimeFilter: number | null;
    prepTimeFilter: number | null;
    setCookTimeFilter: () => void;
    setPrepTimeFilter: () => void;
    filteredData: RecipeResult;
}

export const RecipeContext = createContext<RecipeType | undefined>(undefined);
