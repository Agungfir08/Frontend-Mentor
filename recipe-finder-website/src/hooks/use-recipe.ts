import {
    fetchDetailRecipe,
    fetchRecipe,
    fetchRecipeByTag,
} from '@/api/getRecipeService';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

export function useRecipe(page: number, search?: string) {
    return useQuery({
        queryKey: ['recipes', page, search],
        queryFn: () => fetchRecipe(page, search),
        placeholderData: keepPreviousData,
    });
}

export function useRecipeDetail(id: number) {
    return useQuery({
        queryKey: ['recipe', id],
        queryFn: () => fetchDetailRecipe(id),
        enabled: !!id,
    });
}

export function useRecipeByTag(tag: string) {
    return useQuery({
        queryKey: ['reicpe', 'tag', tag],
        queryFn: () => fetchRecipeByTag(tag),
        enabled: !!tag,
    });
}
