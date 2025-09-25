import { Badge } from '@/components/ui/badge';
import ServingIcon from '/images/icon-servings.svg';
import PrepIcon from '/images/icon-prep-time.svg';
import CookIcon from '/images/icon-cook-time.svg';
import { Button } from '@/components/ui/button';

interface RecipeCardProps {
    imgSrc: string;
    recipeName: string;
    prepTime: number;
    cookTime: number;
    servings: number;
}

function RecipeCard({
    imgSrc,
    recipeName,
    prepTime,
    cookTime,
    servings,
}: RecipeCardProps) {
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
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                        <Badge variant="ghost">
                            <img src={ServingIcon} alt="serving icon" />
                            {`Servings: ${servings}`}
                        </Badge>
                        <Badge variant="ghost">
                            <img src={PrepIcon} alt="ptep time icon" />
                            {`Prep: ${prepTime} ${
                                prepTime > 0 ? 'mins' : 'min'
                            }`}
                        </Badge>
                        <Badge variant="ghost">
                            <img src={CookIcon} alt="cook time icon" />
                            {`Cook: ${cookTime} ${
                                cookTime > 0 ? 'mins' : 'min'
                            }`}
                        </Badge>
                    </div>
                </div>
            </div>
            <Button rounded="full" size="lg" className="w-full">
                View Recipe
            </Button>
        </article>
    );
}

export default RecipeCard;
