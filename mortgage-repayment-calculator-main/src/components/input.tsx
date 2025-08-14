import IconBox from './iconBox';
import { camelCase, kebabCase } from '../utils/utils';

type IconPosition = 'left' | 'right';

interface InputProps {
    iconPosition: IconPosition;
    iconText: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
}

export default function InputNumber({
    iconPosition,
    iconText,
    name,
    value,
    onChange,
    error,
}: InputProps) {
    const inputId = kebabCase(name);
    const inputName = camelCase(name);
    return (
        <div className="flex flex-col gap-3">
            <label
                htmlFor={inputId}
                className="text-base text-slate-700 font-medium">
                {name}
            </label>
            <div
                className={`group flex ${
                    iconPosition === 'left' ? 'flex-row' : 'flex-row-reverse'
                } gap-4 border  rounded-md overflow-hidden  focus-within:border-lime cursor-pointer ${
                    error ? 'border-red' : 'border-slate-500'
                }`}>
                <IconBox
                    text={iconText}
                    className={`${
                        error
                            ? 'bg-red text-white'
                            : 'bg-slate-300 text-slate-900'
                    } group-focus-within:bg-lime`}
                />
                <input
                    type="number"
                    id={inputId}
                    name={inputName}
                    value={value}
                    onChange={onChange}
                    className={`font-bold text-slate-900 w-full text-lg focus:outline-none group-hover:cursor-pointer ${
                        iconPosition === 'left' ? 'pr-4' : 'pl-4'
                    }`}
                />
            </div>
            {error && (
                <p className="text-red text-sm">This field is required</p>
            )}
        </div>
    );
}
