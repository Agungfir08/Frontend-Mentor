import { useMultiStepContext } from '@/hooks/useMultiStepContext';
import { STEPPERS } from '@/lib/constant.ts';
import { cn } from '@/lib/utils.ts';

function Stepper() {
    const { stepIndex } = useMultiStepContext();
    return (
        <div className="bg-[url(/bg-sidebar-mobile.svg)] lg:bg-[url(/bg-sidebar-desktop.svg)] shrink-0 w-full lg:w-[274px] h-[172px] lg:h-[568px] bg-cover py-8 lg:py-10 lg:px-8 max-lg:absolute max-lg:top-0 max-lg:left-0">
            <div className="flex lg:flex-col items-center lg:items-start justify-center gap-3.5 lg:gap-8">
                {STEPPERS.map(({ step, title }, index) => (
                    <div
                        className="lg:flex lg:items-center lg:gap-3.5"
                        key={step}>
                        <button
                            key={step}
                            type="button"
                            className={cn(
                                'size-9 border border-white rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300',
                                {
                                    'bg-blue-200': stepIndex === index,
                                    'bg-transparent': stepIndex !== index,
                                }
                            )}>
                            <span
                                className={cn(
                                    'font-medium transition-colors duration-300',
                                    {
                                        'text-blue-950': stepIndex === index,
                                        'text-white': stepIndex !== index,
                                    }
                                )}>
                                {index + 1}
                            </span>
                        </button>
                        <div className="max-lg:hidden">
                            <p className="text-xs text-purple-200 my-0">{`STEP ${
                                index + 1
                            }`}</p>
                            <p className="uppercase font-bold text-[15px] text-white my-0">
                                {title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Stepper;
