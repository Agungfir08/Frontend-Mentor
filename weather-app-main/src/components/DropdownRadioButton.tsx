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
    label: string;
    value: string;
    settingKey: keyof UnitSettings;
    options: Option[];
    onValueChange: (key: keyof UnitSettings, value: string) => void;
}

function DropdownRadioButton({
    label,
    value,
    options,
    settingKey,
    onValueChange,
}: DropdownRadioButtonProps) {
    return (
        <DropdownMenuRadioGroup
            value={value}
            onValueChange={(value) => onValueChange(settingKey, value)}>
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
