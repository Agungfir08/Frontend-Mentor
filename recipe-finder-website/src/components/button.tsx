import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const buttonVariants = cva(
    'inline-flex justify-center items-center gap-2 cursor-pointer outline-none shrink-0 transition-all duration-200 focus-visible:ring-2  focus-visible:ring-neutral-900 focus-visible:ring-offset-2 ',
    {
        variants: {
            variant: {
                default:
                    'text-body--xl text-neutral-0 bg-neutral-900 hover:bg-neutral-600',
                select: 'text-body--lg text-neutral-900 bg-neutral-0 border border-neutral-300 hover:border-neutral-900',
                icon: 'bg-neutral-300 h-10 w-10',
            },
            size: {
                large: 'px-8 py-4 rounded-10',
                normal: 'px-4 py-3 rounded-10',
                compact: 'px-4 py-2.5 rounded-10',
                icon: 'p-0 rounded-4 ',
            },
        },

        defaultVariants: {
            variant: 'default',
            size: 'large',
        },
    }
);

export function Button({
    className,
    variant,
    size,
    children,
    ...props
}: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants>) {
    return (
        <button
            className={clsx(buttonVariants({ variant, size, className }))}
            {...props}>
            {children}
        </button>
    );
}
