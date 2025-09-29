import DropdownButton from './DropdownButton';
import DropdownRadioButton from './DropdownRadioButton';
import { Button } from './ui/button';
import ArrowDownIcon from '../assets/icon-chevron-down.svg';
import { COOK_TIME_LIST, PREP_TIME_LIST } from '@/constant/constants';

interface RecipeFiltersProps {
    prepTime: number | null;
    setPrepTime: (value: number | null) => void;
    cookTime: number | null;
    setCookTime: (value: number | null) => void;
    clearPrepTime: () => void;
    clearCookTime: () => void;
}

function RecipeFilters({
    prepTime,
    setPrepTime,
    cookTime,
    setCookTime,
    clearPrepTime,
    clearCookTime,
}: RecipeFiltersProps) {
    return (
        <div className="flex flex-col md:flex-row max-md:w-full gap-3">
            <DropdownButton
                trigger={
                    <Button variant="secondary" size="sm">
                        Max Prep Time
                        <img src={ArrowDownIcon} alt="chevron down icon" />
                    </Button>
                }>
                <DropdownRadioButton
                    value={prepTime}
                    onValueChange={setPrepTime}
                    options={PREP_TIME_LIST}
                />
                <Button
                    variant="ghost"
                    size="xs"
                    rounded="icon"
                    className="w-full justify-start"
                    onClick={clearPrepTime}>
                    Clear
                </Button>
            </DropdownButton>
            <DropdownButton
                trigger={
                    <Button variant="secondary" size="sm">
                        Max Cook Time
                        <img src={ArrowDownIcon} alt="chevron down icon" />
                    </Button>
                }>
                <DropdownRadioButton
                    value={cookTime}
                    onValueChange={setCookTime}
                    options={COOK_TIME_LIST}
                />
                <Button
                    variant="ghost"
                    size="xs"
                    rounded="icon"
                    className="w-full justify-start"
                    onClick={clearCookTime}>
                    Clear
                </Button>
            </DropdownButton>
        </div>
    );
}

export default RecipeFilters;
