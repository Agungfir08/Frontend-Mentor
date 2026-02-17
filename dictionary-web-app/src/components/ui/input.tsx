import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
    return (
        <input
            type={type}
            data-slot="input"
            className={cn(
                'file:text-foreground placeholder:text-neutral-800/25 dark:placeholder:text-neutral-0/25 selection:bg-primary selection:text-primary-foreground w-full min-w-0 rounded-16 bg-neutral-100 dark:bg-neutral-900 pl-6 pr-14 py-4 md:py-5 text-base md:text-xl dark:text-neutral-0 font-bold shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
                'focus-visible:ring-purple-500 focus-visible:ring-1',
                'aria-invalid:ring-red-500 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
                className,
            )}
            {...props}
        />
    );
}

export { Input };
