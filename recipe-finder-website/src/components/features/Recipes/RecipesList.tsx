import InputSearch from '../../InputSearch';
import { useRecipe } from '@/hooks/use-recipe';
import { useSearchParams } from 'react-router';
import PaginationPage from '@/components/PaginationPage';
import { LIMIT } from '@/constant/constants';
import RecipeFilters from '@/components/RecipeFilters';
import { useRecipeFilters } from '@/hooks/useRecipeFilters';
import RecipeGrid from './RecipeGrid';

function RecipesList() {
    const {
        prepTime,
        setPrepTime,
        cookTime,
        setCookTime,
        clearPrepTime,
        clearCookTime,
    } = useRecipeFilters();
    const [searchParams] = useSearchParams();
    const page = Number(searchParams.get('page') || 1);
    const search = searchParams.get('search') || '';
    const { data, isFetching } = useRecipe(page, search);
    const totalPage = data?.total ? Math.ceil(data.total / LIMIT) : 1;

    return (
        <section className="space-y-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
                <RecipeFilters
                    prepTime={prepTime}
                    setPrepTime={setPrepTime}
                    cookTime={cookTime}
                    setCookTime={setCookTime}
                    clearPrepTime={clearPrepTime}
                    clearCookTime={clearCookTime}
                />
                <InputSearch />
            </div>
            <RecipeGrid isLoading={isFetching} recipes={data?.recipes || []} />
            <PaginationPage
                page={page}
                url="recipes"
                search={search}
                totalPage={totalPage}
            />
        </section>
    );
}

export default RecipesList;
