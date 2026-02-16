import { MoonIcon } from './icons';
import { Switch } from './ui/switch';
import { useTheme } from '@/hooks/useTheme';

function SwitchTheme() {
    const { isDarkMode, toggleDarkMode } = useTheme();
    return (
        <div className="flex items-center space-x-2.5 md:space-x-5">
            <Switch
                id="theme-mode"
                checked={isDarkMode}
                onCheckedChange={toggleDarkMode}
            />
            <label htmlFor="theme-mode">
                <MoonIcon
                    className={`${isDarkMode ? 'text-purple-500' : 'text-neutral-500'}`}
                />
            </label>
        </div>
    );
}

export default SwitchTheme;
