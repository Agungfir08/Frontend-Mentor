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

export async function fetchRecipe(page: number = 1) {
    const skip = (page - 1) * LIMIT;
    const res = await fetch(
        `https://dummyjson.com/recipes?limit=${LIMIT}&skip=${skip}`
    );

    if (!res.ok) {
        throw new Error('There is something wrong with the API');
    }

    const data = (await res.json()) as RecipeResult;

    return data;
}
