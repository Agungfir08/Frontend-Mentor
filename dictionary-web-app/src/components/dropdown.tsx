import { Button } from './ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from './ui/dropdown-menu';
import ArrowIcon from '../assets/images/icon-arrow-down.svg';
import useDictionaryStore from '@/store/dictionary-store';
import { FONT_TYPES } from '@/lib/constants';

function Dropdown() {
    const fontType = useDictionaryStore((s) => s.fontType);
    const onChangeFontType = useDictionaryStore((s) => s.onChangeFontType);

    const selecttedFont = FONT_TYPES.find((font) => font.value === fontType);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="group">
                <Button
                    variant="ghost"
                    className="font-bold text-sm md:text-lg p-0 focus-visible:ring-0 select-none">
                    {selecttedFont?.label}
                    <img
                        src={ArrowIcon}
                        alt="arrow icon"
                        className="group-data-[state=open]:rotate-180 transition-transform ease-in-out duration-350"
                    />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {FONT_TYPES.map(({ label, className, value }) => (
                    <DropdownMenuItem
                        key={value}
                        className={className}
                        onClick={() => onChangeFontType(value as FontType)}>
                        {label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default Dropdown;
