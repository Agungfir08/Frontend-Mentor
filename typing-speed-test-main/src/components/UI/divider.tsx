import {cn} from "@/lib/utils.ts";

function Divider({className}: {className?: string}) {
    return (
        <div className={cn('w-px bg-neutral-700 h-auto mx-5 md:mx-6 self-stretch last:hidden', className)}></div>
    );
}

export default Divider;