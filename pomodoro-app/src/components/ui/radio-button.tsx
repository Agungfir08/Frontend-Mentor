import { cn } from '@/lib/utils';

interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

function RadioButton({ label, ...props }: RadioButtonProps) {
    return (
        <label
            className={cn(
                'text-xs md:text-sm font-bold leading-5 text-blue-100 has-checked:text-blue-850 transition-colors duration-350 delay-50 bg-transparent inline-flex items-center justify-center h-12 w-26.25 md:w-30 cursor-pointer z-10',
            )}>
            <input type="radio" className="appearance-none" {...props} />
            {label}
        </label>
    );
}

export default RadioButton;
