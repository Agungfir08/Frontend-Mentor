import ServingIcon from '/images/icon-servings.svg';
import PrepIcon from '/images/icon-prep-time.svg';
import CookIcon from '/images/icon-cook-time.svg';
import { Badge } from './ui/badge';

interface RecipeInfoBadgesProps {
    servings: number;
    prepTime: number;
    cookTime: number;
}

function RecipeInfoBadges({
    servings,
    prepTime,
    cookTime,
}: RecipeInfoBadgesProps) {
    const formatTime = (time: number) => `${time} min${time > 1 ? 's' : ''}`;
    return (
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Badge variant="ghost">
                <img src={ServingIcon} alt="serving icon" />
                {`Servings: ${servings}`}
            </Badge>
            <Badge variant="ghost">
                <img src={PrepIcon} alt="ptep time icon" />
                {`Prep: ${formatTime(prepTime)}`}
            </Badge>
            <Badge variant="ghost">
                <img src={CookIcon} alt="cook time icon" />
                {`Cook: ${formatTime(cookTime)}`}
            </Badge>
        </div>
    );
}

export default RecipeInfoBadges;
