import type { FilterType } from '../context/ExtensionsContext';
import useExtensionContext from '../hook/useExtensionContext';

interface RadioButtonProps {
    text: string;
    id: string;
}

function RadioButton({ text, id }: RadioButtonProps) {
    const { filter, changeFilter } = useExtensionContext();
    return (
        <label
            htmlFor={id}
            tabIndex={0}
            className="bg-neutral-0 dark:bg-neutral-700 font-medium text-xl py-2 px-5 rounded-full text-neutral-800 dark:text-neutral-100 cursor-pointer border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-100 dark:hover:text-neutral-900 outline-none focus-visible:border-ring  focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-background focus-visible:bg-neutral-100 focus-visible:ring-red-700 focus-visible:border-neutral-0 dark:focus-visible:ring-red-400 dark:focus-visible:border-neutral-900 dark:focus-visible:bg-neutral-600 has-checked:bg-red-400 has-checked:border-red-400 has-checked:text-neutral-100 dark:has-checked:text-neutral-900
            has-checked:focus-visible:bg-red-400">
            <input
                type="radio"
                id={id}
                checked={filter === text.toLowerCase()}
                value={text.toLowerCase()}
                onClick={() => changeFilter(text.toLowerCase() as FilterType)}
                className="sr-only"
            />
            {text}
        </label>
    );
}

export default RadioButton;
