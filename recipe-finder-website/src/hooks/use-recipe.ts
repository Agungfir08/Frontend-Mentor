import { fetchRecipe } from '@/api/getRecipeService';
import { useQuery } from '@tanstack/react-query';

export function useRecipe(page: number) {
    return useQuery({
        queryKey: ['recipes', page],
        queryFn: () => fetchRecipe(page),
    });
}
