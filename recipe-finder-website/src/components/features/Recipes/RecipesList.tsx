import DropdownButton from '@/components/DropdownButton';
import InputSearch from '../../InputSearch';
import { Button } from '@/components/ui/button';
import ArrowDownIcon from '../../../assets/icon-chevron-down.svg';
import DropdownRadioButton from '@/components/DropdownRadioButton';
import { useState } from 'react';

// TODO: create recipe card

function RecipesList() {
    const [prepTime, setPrepTime] = useState('');
    const [cookTime, setCookTime] = useState('');
    const PREP_TIME_LIST = [
        {
            label: '0 minutes',
            value: 0,
        },
        {
            label: '5 minutes',
            value: 5,
        },
        {
            label: '10 minutes',
            value: 10,
        },
    ];

    const COOK_TIME_LIST = [
        {
            label: '0 minutes',
            value: 0,
        },
        {
            label: '5 minutes',
            value: 5,
        },
        {
            label: '10 minutes',
            value: 10,
        },
        {
            label: '15 minutes',
            value: 15,
        },
        {
            label: '20 minutes',
            value: 20,
        },
    ];
    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="flex gap-3">
                    <DropdownButton
                        trigger={
                            <Button variant="secondary" size="sm">
                                Max Prep Time
                                <img
                                    src={ArrowDownIcon}
                                    alt="chevron down icon"
                                />
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
                            className="w-full justify-start">
                            Clear
                        </Button>
                    </DropdownButton>
                    <DropdownButton
                        trigger={
                            <Button variant="secondary" size="sm">
                                Max Cook Time
                                <img
                                    src={ArrowDownIcon}
                                    alt="chevron down icon"
                                />
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
                            className="w-full justify-start">
                            Clear
                        </Button>
                    </DropdownButton>
                </div>
                <InputSearch />
            </div>
        </div>
    );
}

export default RecipesList;
