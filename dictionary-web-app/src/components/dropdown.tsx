import { Button } from './ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from './ui/dropdown-menu';
import ArrowIcon from '../assets/images/icon-arrow-down.svg';

function Dropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="group">
                <Button
                    variant="ghost"
                    className="font-bold text-sm md:text-lg p-0">
                    Sans Serif
                    <img
                        src={ArrowIcon}
                        alt="arrow icon"
                        className="group-data-[state=open]:rotate-180 transition-transform ease-in-out duration-350"
                    />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem className="font-inter">
                    Sans Serif
                </DropdownMenuItem>
                <DropdownMenuItem className="font-lora">Serif</DropdownMenuItem>
                <DropdownMenuItem className="font-inconsolata">
                    Mono
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default Dropdown;
