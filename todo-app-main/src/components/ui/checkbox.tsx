import CheckIcon from '../../assets/images/icon-check.svg';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
    checked: boolean;
}

function Checkbox({ label, id, checked, ...props }: CheckboxProps) {
    return (
        <label
            htmlFor={id}
            className="relative text-navy-850 text-xs md:text-lg leading-none flex items-center gap-6 group cursor-pointer has-checked:text-gray-300 dark:text-purple-100 dark:has-checked:text-purple-700 has-checked:line-through">
            <input
                type="checkbox"
                id={id}
                checked={checked}
                className="group-hover:cursor-pointer size-5 md:size-6 peer transition-all appearance-none border border-purple-300 rounded-full checked:bg-linear-to-br checked:from-[#55ddff] checked:to-[#c058f3] checked:border-none"
                {...props}
            />
            <span className="absolute opacity-0 peer-checked:opacity-100 top-1/2 left-1.5 transform -translate-y-1/2 pointer-events-none">
                <img
                    src={CheckIcon}
                    alt="check icon"
                    className="h-1.75 md:h-2.5"
                />
            </span>
            <span className="truncate max-w-55">{label}</span>
        </label>
    );
}

export default Checkbox;
