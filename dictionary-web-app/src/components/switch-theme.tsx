import useDictionaryStore from '@/store/dictionary-store';
import { MoonIcon } from './icons';
import { Switch } from './ui/switch';

function SwitchTheme() {
    const isDarkMode = useDictionaryStore((s) => s.isDarkMode);
    const toggleDarkMode = useDictionaryStore((s) => s.toggleDarkMode);
    return (
        <div className="flex items-center space-x-2.5 md:space-x-5">
            <Switch
                id="theme-mode"
                checked={isDarkMode}
                onCheckedChange={toggleDarkMode}
            />
            <label htmlFor="theme-mode">
                <MoonIcon className="dark:text-purple-500 text-neutral-500" />
            </label>
        </div>
    );
}

export default SwitchTheme;
