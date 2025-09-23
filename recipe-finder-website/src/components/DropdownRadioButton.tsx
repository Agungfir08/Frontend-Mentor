import {
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
} from './ui/dropdown-menu';

interface Option {
    label: string;
    value: string | number;
}

interface DropdownRadioButtonProps {
    value: string;
    options: Option[];
    onValueChange: (value: string) => void;
}

function DropdownRadioButton({
    value,
    options,
    onValueChange,
}: DropdownRadioButtonProps) {
    return (
        <DropdownMenuRadioGroup value={value} onValueChange={onValueChange}>
            {options.map(({ value, label }) => (
                <DropdownMenuRadioItem
                    key={value}
                    value={
                        typeof value === 'number' ? value.toString() : value
                    }>
                    {label}
                </DropdownMenuRadioItem>
            ))}
        </DropdownMenuRadioGroup>
    );
}

export default DropdownRadioButton;
