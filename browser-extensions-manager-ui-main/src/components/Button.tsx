import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const ButtonVariants = cva(
    'font-medium text-neutral-800 dark:text-neutral-100 cursor-pointer transition-all duration-300 disabled:cursor-not-allowed shrink-0 grow-0 outline-none disabled:opacity-50 focus-visible:border-ring  focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-background focus-visible:bg-neutral-100 focus-visible:ring-red-700 focus-visible:border-neutral-0 dark:focus-visible:ring-red-400 dark:focus-visible:border-neutral-900 dark:focus-visible:bg-neutral-600',
    {
        variants: {
            variant: {
                destructive:
                    'bg-transparent border border-neutral-600 hover:bg-red-400 hover:border-red-400 hover:text-neutral-100 dark:hover:text-neutral-900 py-[7px] px-[15px] rounded-full ',
                icon: 'bg-neutral-100 dark:bg-neutral-700 p-3.5 rounded-lg hover:bg-neutral-300 hover:dark:bg-neutral-600',
            },
        },
    }
);

function Button({
    variant,
    children,
    className,
    ...props
}: React.ComponentProps<'button'> & VariantProps<typeof ButtonVariants>) {
    return (
        <button
            className={clsx(ButtonVariants({ variant }), className)}
            {...props}>
            {children}
        </button>
    );
}

export default Button;
