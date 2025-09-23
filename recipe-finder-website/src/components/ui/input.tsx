import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
    return (
        <input
            type={type}
            data-slot="input"
            className={cn(
                'file:text-foreground placeholder:text-neutral-900/70 selection:bg-neutral-900 selection:text-neutral-0 dark:bg-input/30 border-neutral-300 w-full min-w-[320px] rounded-10 border bg-transparent px-4 py-2.5 shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
                'font-semibold text-lg font-nunito -tracking-[0.3px] leading-[150%] bg-neutral-0',
                'focus-visible:ring-neutral-900 focus-visible:ring-offset-2  focus-visible:ring-2',
                'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
                className
            )}
            {...props}
        />
    );
}

export { Input };
