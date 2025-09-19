import {
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
} from './ui/dropdown-menu';

interface Option {
    label: string;
    value: string;
}

interface DropdownRadioButtonProps {
    label?: string;
    value: string;
    options: Option[];
    onValueChange: (value: string) => void;
}

function DropdownRadioButton({
    label,
    value,
    options,
    onValueChange,
}: DropdownRadioButtonProps) {
    return (
        <DropdownMenuRadioGroup value={value} onValueChange={onValueChange}>
            <DropdownMenuLabel className="mb-2">{label}</DropdownMenuLabel>
            {options.map((option) => (
                <DropdownMenuRadioItem key={option.value} value={option.value}>
                    {option.label}
                </DropdownMenuRadioItem>
            ))}
        </DropdownMenuRadioGroup>
    );
}

export default DropdownRadioButton;
