import {Label} from "@/components/ui/label.tsx";
import {Switch} from "@/components/ui/switch.tsx";
import {cn} from "@/lib/utils.ts";

interface ToggleButtonProps {
    checked?: boolean;
    onCheckedChange?: () => void;
}

function ToggleButton({checked, onCheckedChange}: ToggleButtonProps) {

    return (
        <div className='flex items-center justify-center gap-6 bg-blue-50 rounded-md py-4'>
            <Label htmlFor='subcription-plan' className={cn('text-[15px] font-medium tracking-tight', {
                'text-blue-950': !checked,
                'text-grey-500': checked,
            })}>Monthly</Label>
            <Switch id='subcription-plan' checked={checked} onCheckedChange={onCheckedChange}/>
            <Label htmlFor='subcription-plan' className={cn('text-[15px] font-medium tracking-tight', {
                'text-blue-950': checked,
                'text-grey-500': !checked,
            })}>Yearly</Label>
        </div>
    );
}

export default ToggleButton;