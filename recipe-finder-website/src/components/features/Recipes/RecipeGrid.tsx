import type { Recipe } from '@/api/getRecipeService';
import RecipeCard from './RecipeCard';
import { Skeleton } from '@/components/ui/skeleton';
import { LIMIT } from '@/constant/constants';

interface RecipesGridProps {
    isLoading: boolean;
    recipes: Recipe[];
}

function RecipeGrid({ isLoading, recipes }: RecipesGridProps) {
    if (isLoading) {
        return (
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {Array.from({ length: LIMIT }).map((_, idx) => (
                    <Skeleton
                        key={idx}
                        className="rounded-10 h-[500px] w-full"
                    />
                ))}
            </div>
        );
    }

    return (
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {recipes.map(
                ({
                    id,
                    name,
                    prepTimeMinutes,
                    cookTimeMinutes,
                    servings,
                    image,
                }) => (
                    <RecipeCard
                        key={id}
                        id={id}
                        imgSrc={image}
                        recipeName={name}
                        prepTime={prepTimeMinutes}
                        cookTime={cookTimeMinutes}
                        servings={servings}
                    />
                )
            )}
        </div>
    );
}

export default RecipeGrid;
