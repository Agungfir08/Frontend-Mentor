import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[2.5px] focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 focus-visible:ring-blue-600 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
    {
        variants: {
            variant: {
                default: 'bg-blue-600 text-neutral-0 hover:bg-blue-400 ',
                destructive:
                    'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
                outline:
                    'border border-neutral-500 hover:border-blue-400 hover:text-blue-400 dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
                secondary:
                    'bg-neutral-0 text-neutral-900 hover:bg-neutral-0/90',
                ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
                link: 'text-primary underline-offset-4 hover:underline',
            },
            text: {
                default:
                    'font-semibold text-[20px] -tracking-[0.3px] leading-[1.2]',
                small: 'font-normal text-base -tracking-[0.48px] leading-[1.2]',
            },
            size: {
                default: 'px-6 py-4 has-[>svg]:px-3',
                sm: 'rounded-md gap-2.5 px-2.5 py-1.5 has-[>svg]:px-2.5',
                lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
                icon: 'size-9',
                'icon-sm': 'size-8 rounded-md',
                'icon-lg': 'size-10',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
            text: 'default',
        },
    },
);

function Button({
    className,
    variant = 'default',
    size = 'default',
    text = 'default',
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
            data-variant={variant}
            data-size={size}
            className={cn(buttonVariants({ variant, size, text, className }))}
            {...props}
        />
    );
}

export { Button, buttonVariants };
