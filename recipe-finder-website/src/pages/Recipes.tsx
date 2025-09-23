import Hero from '../components/features/Recipes/Hero';
import RecipesList from '../components/features/Recipes/RecipesList';

function Recipes() {
    return (
        <div className="space-y-16">
            <Hero />
            <RecipesList />
        </div>
    );
}

export default Recipes;
