import { Label } from '@/components/ui/label.tsx';
import { Switch } from '@/components/ui/switch.tsx';
import { cn } from '@/lib/utils.ts';
import { Controller, useFormContext } from 'react-hook-form';

function SwitchButton() {
    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name="yearlySubscription"
            render={({ field }) => (
                <div className="flex items-center justify-center gap-6 bg-blue-50 rounded-md py-4">
                    <Label
                        htmlFor="subcription-plan"
                        className={cn(
                            'text-[15px] font-medium tracking-tight cursor-pointer',
                            {
                                'text-blue-950': !field.value,
                                'text-grey-500': field.value,
                            }
                        )}>
                        Monthly
                    </Label>
                    <Switch
                        data-testid="switch-button"
                        id="subcription-plan"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                    />
                    <Label
                        htmlFor="subcription-plan"
                        className={cn(
                            'text-[15px] font-medium tracking-tight cursor-pointer',
                            {
                                'text-blue-950': field.value,
                                'text-grey-500': !field.value,
                            }
                        )}>
                        Yearly
                    </Label>
                </div>
            )}
        />
    );
}

export default SwitchButton;
