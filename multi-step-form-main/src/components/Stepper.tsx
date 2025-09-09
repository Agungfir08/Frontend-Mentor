import {STEPPERS} from "@/lib/constant.ts";
import {useFormContext} from "@/hooks/useFormContext.ts";
import {cn} from "@/lib/utils.ts";

function Stepper() {
    const {stepIndex} = useFormContext()
    return (
        <div
            className='bg-[url(/bg-sidebar-mobile.svg)] w-full h-[172px] bg-cover py-8 max-lg:absolute max-lg:top-0 max-lg:left-0'>
            <div className='flex items-center justify-center gap-3.5'>
                {STEPPERS.map(({step, title}, index) => (
                    <button key={step} type='button'
                            className={cn('size-9 border border-white rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300', {
                                'bg-blue-200': stepIndex === index + 1,
                                'bg-transparent': stepIndex !== index + 1,
                            })}>
                        <span className={cn('font-medium transition-colors duration-300', {
                            'text-blue-950': stepIndex === index + 1,
                            'text-white': stepIndex !== index + 1,
                        })}>{index + 1}</span>
                        <span className='hidden'>{title}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Stepper;