import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from './ui/dropdown-menu';

function DropdownButton({
    trigger,
    children,
}: {
    trigger: React.ReactNode;
    children: React.ReactNode;
}) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-[240px] "
                align="start"
                side="bottom">
                {children}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default DropdownButton;
