import clsx from 'clsx';

type TextPosition = 'right' | 'center';

interface InputNumberProps {
    icon?: string;
    label?: string;
    id: string;
    name: string;
    value: string;
    error?: string | null;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    position?: TextPosition;
}

const InputNumber = ({
    icon,
    label,
    id,
    name,
    value,
    error,
    onChange,
    placeholder,
    position = 'right',
}: InputNumberProps) => {
    return (
        <>
            {label && (
                <div className="flex items-center justify-between">
                    <label
                        htmlFor={id}
                        className="capitalize text-grey-500 cursor-pointer">
                        {label}
                    </label>

                    {error && <p className="text-red-500">{error}</p>}
                </div>
            )}
            <div
                className={clsx('relative w-full', {
                    'mt-1.5': label,
                })}>
                {icon && (
                    <img
                        src={icon}
                        alt={`${name} icon`}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2"
                    />
                )}
                <input
                    type="number"
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    min="0"
                    className={clsx(
                        'bg-grey-50 appearance-none no-spinner w-full text-2xl font-bold text-green-900 py-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer placeholder:capitalize hover:ring-2 hover:ring-green-400',
                        {
                            'pr-4 pl-10': icon,
                            'px-4': !icon,
                            'ring-2 ring-red-500': error,
                            'text-center': position === 'center',
                            'text-right': position === 'right',
                        }
                    )}
                />
            </div>
        </>
    );
};

export default InputNumber;
