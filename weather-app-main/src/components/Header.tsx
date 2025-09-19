import { DropdownButton } from './DropdownButton';
import DropdownRadioButton from './DropdownRadioButton';
import { Button } from './ui/button';
import { DropdownMenuSeparator } from './ui/dropdown-menu';
import { useCtx } from '@/hooks/useCtx';

function Header() {
    const { unitSettings, setUnitSettings, isImperial, toggleImperial } =
        useCtx();

    const handleChangeUnit = (key: keyof UnitSettings) => {
        return (value: string) => {
            setUnitSettings((prev) => ({
                ...prev,
                [key]: value,
            }));
        };
    };

    return (
        <header className="flex items-center justify-between px-1">
            <a href="/">
                <img
                    src="/images/logo.svg"
                    alt="Weather Now logo"
                    className="w-auto h-7 md:h-auto"
                />
            </a>
            <DropdownButton
                trigger={
                    <Button>
                        <img
                            src="/images/icon-units.svg"
                            alt="icon units button"
                            className="size-3.5 md:size-4"
                        />
                        Units
                        <img
                            src="/images/icon-dropdown.svg"
                            alt="icon dropdown button"
                            className="size-3.5 md:size-4"
                        />
                    </Button>
                }>
                <Button
                    variant="setting"
                    align="start"
                    onClick={toggleImperial}>{`Switch to ${
                    isImperial ? 'Metric' : 'Imperial'
                }`}</Button>
                <DropdownRadioButton
                    label="Temperature"
                    value={unitSettings.temperature}
                    onValueChange={handleChangeUnit('temperature')}
                    options={[
                        { value: 'celsius', label: 'Celcius (°C)' },
                        { value: 'fahrenheit', label: 'Fahrenheit (°F)' },
                    ]}
                />
                <DropdownMenuSeparator />
                <DropdownRadioButton
                    label="Wind Speed"
                    value={unitSettings.windSpeed}
                    onValueChange={handleChangeUnit('windSpeed')}
                    options={[
                        { value: 'kmh', label: 'km/h' },
                        { value: 'mph', label: 'mph' },
                    ]}
                />
                <DropdownMenuSeparator />
                <DropdownRadioButton
                    label="Precipitation"
                    value={unitSettings.precipitation}
                    onValueChange={handleChangeUnit('precipitation')}
                    options={[
                        { value: 'mm', label: 'Millimeters (mm)' },
                        { value: 'inch', label: 'Inches (in)' },
                    ]}
                />
            </DropdownButton>
        </header>
    );
}

export default Header;
