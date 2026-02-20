import RadioButton from './ui/radio-button';
import { cn } from '@/lib/utils';
import usePomodoro from '@/store/pomodoro-store';

const TABS: TABS_TYPE[] = [
    { label: 'pomodoro', value: 'pomodoro' },
    { label: 'short break', value: 'shortBreak' },
    { label: 'long break', value: 'longBreak' },
];

const TRANSLATE_X_MAP: Record<ActiveTabsType, string> = {
    pomodoro: 'before:translate-x-0',
    shortBreak: 'before:translate-x-26.25 before:md:translate-x-30',
    longBreak: 'before:translate-x-52.5 before:md:translate-x-60',
};

const SELECTED_COLOR: Record<COLOR_OPTIONS, string> = {
    red: 'before:bg-red-400',
    cyan: 'before:bg-cyan-300',
    purple: 'before:bg-purple-400',
};

function TabMenu() {
    const { color, activeTab, setActiveTab } = usePomodoro();

    console.log(activeTab);
    return (
        <div
            className={cn(
                'px-[7.5px] py-[7.5px] md:px-2.5 bg-blue-900 rounded-full w-fit relative flex items-center before:absolute before:left-[7.5px] before:md:left-2.5 before:top-[7.5px] before:bottom-[7.5px] before:w-26.25 before:md:w-30 before:rounded-full before:transform  before:transition-transform before:ease-in-out before:duration-300',
                TRANSLATE_X_MAP[activeTab],
                SELECTED_COLOR[color],
            )}>
            {TABS.map(({ label, value }, index) => (
                <RadioButton
                    key={index}
                    label={label}
                    name="active-tab"
                    checked={activeTab === value}
                    onChange={() => setActiveTab(value)}
                />
            ))}
        </div>
    );
}

export default TabMenu;
