import { LIMIT } from '@/constant/constants';

export interface Recipe {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
}

export interface RecipeResult {
    recipes: Recipe[];
    total: number;
    skip: number;
    limit: number;
}

const BASE_URL = 'https://dummyjson.com/recipes';

async function apiFetch<T>(
    url: string | URL,
    options?: RequestInit
): Promise<T> {
    const response = await fetch(url, options);

    if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
    }

    return response.json() as Promise<T>;
}

export async function fetchRecipe(
    page: number = 1,
    search?: string
): Promise<RecipeResult> {
    const endpoint = search && search.trim() !== '' ? '/search' : '';
    const url = new URL(`${BASE_URL}${endpoint}`);

    url.searchParams.set('limit', String(LIMIT));
    url.searchParams.set('skip', String((page - 1) * LIMIT));

    if (endpoint === '/search') {
        url.searchParams.set('q', search!);
    }

    return apiFetch<RecipeResult>(url);
}

export async function fetchDetailRecipe(id: number): Promise<Recipe> {
    return apiFetch<Recipe>(`${BASE_URL}/${id}`);
}

export async function fetchRecipeByTag(tag: string): Promise<RecipeResult> {
    return apiFetch<RecipeResult>(`${BASE_URL}/tag/${encodeURIComponent(tag)}`);
}
