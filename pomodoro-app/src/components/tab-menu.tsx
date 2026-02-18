import { useState } from 'react';
import RadioButton from './ui/radio-button';
import { cn } from '@/lib/utils';

type ActiveTabsType = 'podomoro' | 'short break' | 'long break';

const TABS: ActiveTabsType[] = ['podomoro', 'short break', 'long break'];

const TRANSLATE_X_MAP: Record<ActiveTabsType, string> = {
    podomoro: 'before:translate-x-0',
    'short break': 'before:translate-x-26.25 before:md:translate-x-30',
    'long break': 'before:translate-x-52.5 before:md:translate-x-60',
};

function TabMenu() {
    const [activeTab, setActiveTab] = useState<ActiveTabsType>('podomoro');

    const handleChangeActiveTab = (e: React.ChangeEvent<HTMLInputElement>) => {
        setActiveTab(e.target.value as ActiveTabsType);
    };
    return (
        <div
            className={cn(
                'px-[7.5px] py-[7.5px] md:px-2.5 bg-blue-900 rounded-full w-fit relative flex items-center before:absolute before:left-[7.5px] before:md:left-2.5 before:top-[7.5px] before:bottom-[7.5px] before:w-26.25 before:md:w-30 before:bg-red-400 before:rounded-full before:transform  before:transition-transform before:ease-in-out before:duration-300',
                TRANSLATE_X_MAP[activeTab],
            )}>
            {TABS.map((tab, index) => (
                <RadioButton
                    key={index}
                    label={tab}
                    name="active-tab"
                    value={tab}
                    checked={activeTab === tab}
                    onChange={handleChangeActiveTab}
                />
            ))}
        </div>
    );
}

export default TabMenu;
