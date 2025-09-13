interface SwitchButtonProps {
    id: string;
    checked: boolean;
    onCheckedChange: () => void;
}

function SwitchButton({ checked, onCheckedChange, id }: SwitchButtonProps) {
    return (
        <div className="relative inline-block w-[38px] h-[22px] ">
            <input
                checked={checked}
                onChange={onCheckedChange}
                id={id}
                type="checkbox"
                className="peer outline-none appearance-none w-[38px] h-[22px] bg-neutral-300 dark:bg-neutral-600 rounded-full checked:bg-red-400 cursor-pointer transition-all duration-300 focus-visible:border-ring  focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-background checked:focus-visible:bg-red-400 focus-visible:ring-red-700 focus-visible:border focus-visible:border-neutral-0 dark:focus-visible:ring-red-400 dark:focus-visible:border-neutral-900 dark:focus-visible:bg-neutral-600 "
            />
            <label
                htmlFor={id}
                className="absolute top-1/2 -translate-y-1/2 left-0.5 size-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-[18px] cursor-pointer"></label>
        </div>
    );
}

export default SwitchButton;
