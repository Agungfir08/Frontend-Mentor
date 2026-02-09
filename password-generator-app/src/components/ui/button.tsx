import { cva, type VariantProps } from 'class-variance-authority';

interface ButtonProps
    extends
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonStyles> {
    children: React.ReactNode;
    className?: string;
}

const buttonStyles = cva(
    'inline-flex justify-center items-center gap-2 border-2 uppercase font-bold text-base md:text-lg tracking-normal whitespace-nowrap [&_svg]:shrink-0 [&_svg]:pointer-events-none cursor-pointer transition-colors',
    {
        variants: {
            variant: {
                primary:
                    'border-green-200 bg-green-200 text-grey-800 hover:bg-transparent hover:text-green-200 [&_svg:not([class*="size-"])]:size-3',
                ghost: 'border-none bg-transparent',
            },
            size: {
                default: 'w-full py-4',
                icon: 'w-auto p-1',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'default',
        },
    },
);

function Button({
    children,
    className,
    size = 'default',
    variant = 'primary',
    ...props
}: ButtonProps) {
    return (
        <button
            {...props}
            className={buttonStyles({ size, variant, className })}>
            {children}
        </button>
    );
}

export default Button;
