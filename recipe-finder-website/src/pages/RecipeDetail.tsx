import RecipeBreadcrumb from '@/components/features/Recipes/RecipeBreadcrumb';
import { useRecipeDetail } from '@/hooks/use-recipe';
import { useParams } from 'react-router';
import RecipeInfoBadges from '@/components/RecipeInfoBadges';
import RecipeSectionList from '@/components/features/Recipes/RecipeSectionList';
import RelatedRecipes from '@/components/features/Recipes/RelatedRecipes';
import { RecipeDetailSkeleton } from '@/components/Skeleton';

function RecipeDetail() {
    const { id } = useParams();

    const { data, isLoading } = useRecipeDetail(Number(id));

    const tag =
        data?.tags && data.tags.length > 0
            ? data.tags[Math.floor(Math.random() * data.tags.length)]
            : null;

    if (isLoading || !data) {
        return <RecipeDetailSkeleton />;
    }
    return (
        <div className="space-y-24">
            <section>
                <RecipeBreadcrumb name={data?.name ?? ''} />
                <div className="grid lg:grid-cols-2 gap-10 mt-4">
                    <img
                        src={data?.image}
                        alt={data?.name}
                        className="rounded-10 w-full h-auto"
                    />
                    <div className="space-y-5">
                        <h1 className="heading-2 text-neutral-900">
                            {data?.name}
                        </h1>
                        <RecipeInfoBadges
                            servings={data.servings}
                            prepTime={data.prepTimeMinutes}
                            cookTime={data.cookTimeMinutes}
                        />
                        <RecipeSectionList
                            title="Ingridients"
                            items={data.ingredients}
                        />
                        <RecipeSectionList
                            title="Instructions"
                            items={data.instructions}
                        />
                    </div>
                </div>
            </section>
            {tag && <RelatedRecipes tag={tag} currentRecipeId={data.id} />}
        </div>
    );
}

export default RecipeDetail;
