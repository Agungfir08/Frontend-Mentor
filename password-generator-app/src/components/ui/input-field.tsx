import { useState } from 'react';
import { CheckIcon } from '../icons';
import Button from './button';

interface InputFieldProps {
    value: string;
}

function InputField({ value }: InputFieldProps) {
    const [isCopied, setIsCopied] = useState<boolean>(false);

    const handleCopyPassword = () => {
        if (!value) return;
        navigator.clipboard.writeText(value);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 3000);
    };

    return (
        <div className="relative">
            <input
                type="text"
                className="w-full bg-grey-800 py-4 pl-4 md:pl-8 pr-12 text-preset-two placeholder:text-white/20 text-white"
                placeholder="P4$5w0rD!"
                value={value}
                disabled
            />
            <Button
                size="icon"
                variant="ghost"
                className="absolute group right-4 top-1/2 transform -translate-y-1/2 bg-red-500"
                onClick={handleCopyPassword}>
                <span className="text-green-200 text-preset-four uppercase">
                    {isCopied && 'Copied'}
                </span>
                <CheckIcon className="fill-green-200 group-hover:fill-white" />
            </Button>
        </div>
    );
}

export default InputField;
