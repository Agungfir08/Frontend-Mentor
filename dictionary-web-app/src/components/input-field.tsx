import { Input } from '@/components/ui/input';
import SearchIcon from '@/assets/images/icon-search.svg';
import type { InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
}

function InputField({ placeholder, ...props }: InputFieldProps) {
    return (
        <div className="relative">
            <Input type="text" placeholder={placeholder} {...props} />
            <img
                src={SearchIcon}
                alt="search icon"
                className="size-5 absolute top-1/2 right-6 transform -translate-y-1/2"
            />
        </div>
    );
}

export default InputField;
