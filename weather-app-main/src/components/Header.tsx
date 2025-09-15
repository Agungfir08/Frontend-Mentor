import { useState } from 'react';
import { DropdownButton } from './DropdownButton';
import { Button } from './ui/button';
import {
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
} from './ui/dropdown-menu';

function Header() {
    const [temperature, setTemperature] = useState('celcius');
    const [wind, setWind] = useState('km/h');

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
                    onValueChange={setTemperature}>
                    <DropdownMenuLabel className="mb-2">
                        Temperature
                    </DropdownMenuLabel>
                    <DropdownMenuRadioItem value="celcius">
                        Celcius (&#8451;)
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="fahrenheit">
                        Fahrenheit (&#8457;)
                    </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={wind} onValueChange={setWind}>
                    <DropdownMenuLabel className="mb-2">
                        Wind Speed
                    </DropdownMenuLabel>
                    <DropdownMenuRadioItem value="km/h">
                        km/h
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="mph">
                        mph
                    </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownButton>
        </header>
    );
}

export default Header;
