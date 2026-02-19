import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

interface RadioButtonProps
    extends
        React.InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof radioButtonVariant> {
    label?: string;
    className?: string;
}

const radioButtonVariant = cva(
    'inline-flex items-center justify-center outline-none  cursor-pointer',
    {
        variants: {
            variant: {
                tab: 'text-xs md:text-sm font-bold leading-5 text-blue-100 has-checked:text-blue-850 transition-colors duration-350 delay-50 bg-transparent h-12 w-26.25 md:w-30 z-10',
                font: 'bg-blue-50 has-checked:bg-blue-900 has-checked:text-white size-10 rounded-full text-base hover:ring-2 hover:ring-blue-50 hover:ring-offset-2 text-blue-850 transition-colors has-checked:hover:ring-0',
            },
        },
        defaultVariants: {
            variant: 'tab',
        },
    },
);

function RadioButton({
    label,
    className,
    variant = 'tab',
    ...props
}: RadioButtonProps) {
    return (
        <label className={cn(radioButtonVariant({ variant, className }))}>
            <input type="radio" className="appearance-none" {...props} />
            {label}
        </label>
    );
}

export default RadioButton;
