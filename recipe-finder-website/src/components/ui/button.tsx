import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-neutral-900 focus-visible:ring-offset-2  focus-visible:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
    {
        variants: {
            variant: {
                default:
                    'font-bold text-xl font-nunito -tracking-[0.5px] leading-[140%]; text-neutral-0 bg-neutral-900 hover:bg-neutral-600',
                destructive:
                    'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
                icon: 'bg-neutral-300',
                secondary:
                    'font-semibold text-lg font-nunito -tracking-[0.3px] leading-[150%] text-neutral-900 bg-neutral-0 border border-neutral-300 hover:border-neutral-900',
                ghost: 'bg-transparent hover:ring-2 hover:ring-neutral-900 font-medium text-base font-nunito-sans -tracking-[0.3px] leading-[150%]',
                outline:
                    'ring-2 ring-neutral-900 font-medium text-base font-nunito-sans -tracking-[0.3px] leading-[150%]',
                link: 'text-primary underline-offset-4 hover:underline',
            },
            size: {
                default: 'px-8 py-4',
                xs: 'px-2 py-1',
                sm: 'px-4 py-2.5',
                lg: 'px-4 py-3',
                icon: 'size-10',
            },
            rounded: {
                default: 'rounded-10',
                icon: 'rounded-4',
                full: 'rounded-full',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
            rounded: 'default',
        },
    }
);

function Button({
    className,
    variant,
    size,
    rounded,
    asChild = false,
    ...props
}: React.ComponentProps<'button'> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
    }) {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp
            data-slot="button"
            className={cn(
                buttonVariants({ variant, size, rounded, className })
            )}
            {...props}
        />
    );
}

export { Button, buttonVariants };
