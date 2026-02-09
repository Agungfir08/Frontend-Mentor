interface CheckboxProps {
    id: string;
    value: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
}

function Checkbox({ id, value, checked, onChange, label }: CheckboxProps) {
    return (
        <label
            htmlFor={id}
            className="flex items-center space-x-6 cursor-pointer relative">
            <input
                type="checkbox"
                id={id}
                value={value}
                checked={checked}
                onChange={onChange}
                className="peer h-4 w-4 transition-colors accent-green-200 appearance-none border-2 border-white hover:border-green-200 checked:border-none checked:bg-green-200"
            />
            <span className="absolute opacity-0 peer-checked:opacity-100 top-1/2 left-2 transform -translate-x-1/2 -translate-y-1/2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="1">
                    <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                </svg>
            </span>
            <span className="text-preset-four md:text-lg text-grey-200 capitalize">
                {label}
            </span>
        </label>
    );
}

export default Checkbox;
