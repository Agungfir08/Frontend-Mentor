interface RadioButtonProps {
    name: string;
    label: string;
    value: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function RadioButton({
    name,
    label,
    value,
    checked,
    onChange,
}: RadioButtonProps) {
    return (
        <label className="border border-slate-500 rounded-md font-bold text-slate-900 text-lg py-3 pl-5 has-checked:bg-lime/20 has-checked:border-lime lg:hover:border-lime cursor-pointer">
            <input
                type="radio"
                name={name}
                value={value}
                onChange={onChange}
                checked={checked}
                className="mr-3.5 "
            />
            {label}
        </label>
    );
}
