import { DropdownButton } from './DropdownButton';
import { Button } from './ui/button';
import {
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
} from './ui/dropdown-menu';
import { useCtx } from '@/hooks/useCtx';

function Header() {
    const {
        temperature,
        windSpeed,
        precipitation,
        setTemperature,
        setWindSpeed,
        setPrecipitation,
    } = useCtx();

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
                <DropdownMenuRadioGroup
                    value={temperature}
                    onValueChange={(value) =>
                        setTemperature(value as 'celsius' | 'fahrenheit')
                    }>
                    <DropdownMenuLabel className="mb-2">
                        Temperature
                    </DropdownMenuLabel>
                    <DropdownMenuRadioItem value="celsius">
                        Celcius (&#8451;)
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="fahrenheit">
                        Fahrenheit (&#8457;)
                    </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                    value={windSpeed}
                    onValueChange={(value) =>
                        setWindSpeed(value as 'kmh' | 'mph')
                    }>
                    <DropdownMenuLabel className="mb-2">
                        Wind Speed
                    </DropdownMenuLabel>
                    <DropdownMenuRadioItem value="kmh">
                        km/h
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="mph">
                        mph
                    </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                    value={precipitation}
                    onValueChange={(value) =>
                        setPrecipitation(value as 'mm' | 'inch')
                    }>
                    <DropdownMenuLabel className="mb-2">
                        Precipitation
                    </DropdownMenuLabel>
                    <DropdownMenuRadioItem value="mm">
                        Millimetes (mm)
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="inch">
                        Inches (in)
                    </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownButton>
        </header>
    );
}

export default Header;
