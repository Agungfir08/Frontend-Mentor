import PlanCard from "@/components/RadioPlan.tsx";
import {PLANS} from "@/lib/constant.ts";
import {useFormContext} from "@/hooks/useFormContext.ts";
import ToggleButton from "@/components/ToggleButton.tsx";

function PlanStep() {
    const {yearlySubscription} = useFormContext()
    console.log(yearlySubscription)

    return (
        <div className='space-y-6'>
            <div className='space-y-3.5'>
                {PLANS.map(plan => (
                    <PlanCard key={plan.name} image={plan.image} name={plan.name}
                              price={yearlySubscription ? plan.priceYearly : plan.priceMonthly}
                              yearlySubscription={yearlySubscription}/>
                ))}

            </div>
            <ToggleButton/>
        </div>
    );
}

export default PlanStep;