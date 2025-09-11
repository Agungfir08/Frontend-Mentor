import RadioButton from '@/components/RadioButton';
import { PLANS } from '@/lib/constant.ts';
import SwitchButton from '@/components/SwitchButton';
import { useMultiStepContext } from '@/hooks/useMultiStepContext';

function PlanStep() {
    const { yearlySubscription } = useMultiStepContext();

    return (
        <div className="space-y-6">
            <div className="flex flex-col lg:flex-row gap-3.5 lg:gap-[18px] ">
                {PLANS.map((plan) => (
                    <RadioButton
                        key={plan.name}
                        image={plan.image}
                        name={plan.name}
                        price={
                            yearlySubscription
                                ? plan.priceYearly
                                : plan.priceMonthly
                        }
                        yearlySubscription={yearlySubscription}
                    />
                ))}
            </div>
            <SwitchButton />
        </div>
    );
}

export default PlanStep;
