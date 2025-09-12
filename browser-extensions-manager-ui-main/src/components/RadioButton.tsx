interface RadioButtonProps {
    text: string;
    id: string;
    checked?: boolean;
}

function RadioButton({ text, id, checked }: RadioButtonProps) {
    return (
        <label
            htmlFor={id}
            tabIndex={0}
            className="bg-neutral-700 font-medium text-xl py-2 px-5 rounded-full text-neutral-800 dark:text-neutral-100 cursor-pointer border border-neutral-600 hover:bg-red-400 hover:border-red-400 hover:text-neutral-100 dark:hover:text-neutral-900 outline-none focus-visible:border-ring  focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-background focus-visible:bg-neutral-100 focus-visible:ring-red-700 focus-visible:border-neutral-0 dark:focus-visible:ring-red-400 dark:focus-visible:border-neutral-900 dark:focus-visible:bg-neutral-600 has-checked:bg-red-400 has-checked:border-red-400 has-checked:text-neutral-100 dark:has-checked:text-neutral-900
            has-checked:focus-visible:bg-red-400">
            <input
                type="radio"
                id={id}
                checked={checked}
                value={text.toLowerCase()}
                className="sr-only"
            />
            {text}
        </label>
    );
}

export default RadioButton;
