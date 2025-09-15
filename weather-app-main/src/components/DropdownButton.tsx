import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type React from 'react';

interface DropdownButtonProps {
    trigger: React.ReactNode;
    children: React.ReactNode;
}

export function DropdownButton({ trigger, children }: DropdownButtonProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>

            <DropdownMenuContent
                className="w-[214px]"
                side="bottom"
                align="end"
                sideOffset={10}>
                {children}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
