import { Skeleton } from '@/components/ui/skeleton';
import { useRecipeByTag } from '@/hooks/use-recipe';
import RecipeCard from './RecipeCard';

interface RelatedRecipesProps {
    tag: string;
    currentRecipeId: number;
}

function RelatedRecipes({ tag, currentRecipeId }: RelatedRecipesProps) {
    const { data, isLoading } = useRecipeByTag(tag);

    const relatedRecipes = data?.recipes
        .filter((recipe) => recipe.id !== currentRecipeId)
        .slice(0, 3);

    if (!relatedRecipes || relatedRecipes.length === 0) {
        return null;
    }

    console.log('realted', data);

    return (
        <section className="space-y-6">
            <h2 className="sub-heading text-neutral-900">More Recipes</h2>
            <div className="grid lg:grid-cols-3 gap-8">
                {isLoading
                    ? Array.from({ length: 3 }).map((_, idx) => (
                          <Skeleton
                              key={idx}
                              className="rounded-10 h-[500px] w-full"
                          />
                      ))
                    : relatedRecipes.map((recipe) => (
                          <RecipeCard
                              key={recipe.id}
                              id={recipe.id}
                              imgSrc={recipe.image}
                              recipeName={recipe.name}
                              prepTime={recipe.prepTimeMinutes}
                              cookTime={recipe.cookTimeMinutes}
                              servings={recipe.servings}
                          />
                      ))}
            </div>
        </section>
    );
}

export default RelatedRecipes;
