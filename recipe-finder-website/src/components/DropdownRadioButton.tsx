import {
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
} from './ui/dropdown-menu';

interface Option {
    label: string;
    value: number | null;
}

interface DropdownRadioButtonProps {
    value: number | null;
    options: Option[];
    onValueChange: (value: number | null) => void;
}

function DropdownRadioButton({
    value,
    options,
    onValueChange,
}: DropdownRadioButtonProps) {
    return (
        <DropdownMenuRadioGroup
            value={value !== null ? String(value) : ''}
            onValueChange={(val) => {
                onValueChange(val === '' ? null : Number(val));
            }}>
            {options.map(({ value, label }) => (
                <DropdownMenuRadioItem
                    key={value ?? 'null'}
                    value={value !== null ? String(value) : ''}>
                    {label}
                </DropdownMenuRadioItem>
            ))}
        </DropdownMenuRadioGroup>
    );
}

export default DropdownRadioButton;
