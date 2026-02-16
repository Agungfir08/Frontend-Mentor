import * as React from 'react';
import { Switch as SwitchPrimitive } from 'radix-ui';

import { cn } from '@/lib/utils';

function Switch({
    className,
    size = 'default',
    ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> & {
    size?: 'sm' | 'default';
}) {
    return (
        <SwitchPrimitive.Root
            data-slot="switch"
            data-size={size}
            className={cn(
                'peer data-[state=checked]:bg-purple-500 data-[state=unchecked]:bg-neutral-500 focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 group/switch inline-flex shrink-0 items-center rounded-full shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-5 data-[size=default]:w-10 data-[size=sm]:h-3.5 data-[size=sm]:w-6 cursor-pointer',
                className,
            )}
            {...props}>
            <SwitchPrimitive.Thumb
                data-slot="switch-thumb"
                className={cn(
                    'bg-neutral-0 pointer-events-none block rounded-full ring-0 transition-transform size-3.5  data-[state=checked]:translate-x-[calc(100%+9px)] data-[state=unchecked]:translate-x-0.75',
                )}
            />
        </SwitchPrimitive.Root>
    );
}

export { Switch };
