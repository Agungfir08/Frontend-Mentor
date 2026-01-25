import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type ValueColorVariant = 'white' | 'red' | 'green';

interface StatCompleteProps {
    text: string;
    value: ReactNode;
    variant?: ValueColorVariant;
    className?: string;
}

function StatComplete({
    text,
    value,
    className,
    variant = 'white',
}: StatCompleteProps) {
    const valueColor = {
        white: 'text-neutral-0',
        red: 'text-red-500',
        green: 'text-green-500',
    };

    return (
        <div
            className={cn(
                'border border-neutral-700 rounded-md px-6 py-4 flex flex-col gap-4 w-full',
                className,
            )}>
            <h3 className="text-preset-three-regular text-neutral-400">
                {text}
            </h3>
            <p
                className={cn(
                    'font-bold text-[24px] tracking-normal leading-none',
                    valueColor[variant],
                )}>
                {value}
            </p>
        </div>
    );
}

export default StatComplete;
