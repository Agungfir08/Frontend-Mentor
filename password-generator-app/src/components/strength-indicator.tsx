import clsx from 'clsx';
import StrengthBar from './ui/strength-bar';

interface StrengthIndicatorProp {
    selectedOptions: number;
}

function StrengthIndicator({ selectedOptions }: StrengthIndicatorProp) {
    const strengthConfig = {
        1: { label: 'Too Weak!', color: 'bg-red-500' },
        2: { label: 'Weak', color: 'bg-orange-400' },
        3: { label: 'Medium', color: 'bg-yellow-300' },
        4: { label: 'Strong', color: 'bg-green-200' },
    };

    const currentConfig =
        strengthConfig[selectedOptions as keyof typeof strengthConfig];
    const activeColor = currentConfig?.color || '';
    const strengthLabel = currentConfig?.label || '';
    return (
        <div className="bg-grey-850 w-full flex items-center justify-between p-4 md:px-8 md:py-6">
            <h3 className="uppercase text-grey-600 text-preset-three md:text-[24px]">
                strength
            </h3>
            <div className="flex items-center gap-4">
                <span className="text-white uppercase text-preset-three md:text-[24px] leading-0">
                    {strengthLabel}
                </span>
                <div className={clsx('flex items-center gap-2')}>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <StrengthBar
                            key={index}
                            active={index < selectedOptions}
                            color={activeColor}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default StrengthIndicator;
