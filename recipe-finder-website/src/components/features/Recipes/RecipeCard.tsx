import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router';
import RecipeInfoBadges from '@/components/RecipeInfoBadges';

interface RecipeCardProps {
    id: number;
    imgSrc: string;
    recipeName: string;
    prepTime: number;
    cookTime: number;
    servings: number;
}

function RecipeCard({
    id,
    imgSrc,
    recipeName,
    prepTime,
    cookTime,
    servings,
}: RecipeCardProps) {
    const navigate = useNavigate();
    return (
        <article className="bg-neutral-0 border border-neutral-300 p-2 rounded-10 flex flex-col justify-between gap-4">
            <div className="space-y-4">
                <img
                    src={imgSrc}
                    alt={recipeName}
                    className="w-full h-[360px] md:h-[450px] lg:h-[300px] rounded-10 object-cover"
                    loading="lazy"
                />
                <div className="space-y-4">
                    <h3 className="text-body--xl text-neutral-900 truncate">
                        {recipeName}
                    </h3>
                    <RecipeInfoBadges
                        servings={servings}
                        prepTime={prepTime}
                        cookTime={cookTime}
                    />
                </div>
            </div>
            <Button
                rounded="full"
                size="lg"
                className="w-full"
                onClick={() => navigate(`/recipes/${id}`)}>
                View Recipe
            </Button>
        </article>
    );
}

export default RecipeCard;
