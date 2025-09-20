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
            <div className="space-y-1">
                {options.map((option) => (
                    <DropdownMenuRadioItem
                        key={option.value}
                        value={option.value}>
                        {option.label}
                    </DropdownMenuRadioItem>
                ))}
            </div>
        </DropdownMenuRadioGroup>
    );
}

export default DropdownRadioButton;
