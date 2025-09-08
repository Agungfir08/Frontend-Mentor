import StepCard from "@/components/StepCard.tsx";
import PlanCard from "@/components/RadioPlan.tsx";
import {PLANS} from "@/lib/constant.ts";
import ToggleButton from "@/components/ToggleButton.tsx";
import {useFormContext} from "@/hooks/useFormContext.ts";

function PlanStep() {
    const {yearlySubs, toggleYearlySubs} = useFormContext()

    return (
        <StepCard title='Select your plan' description='You have the option of monthly or yearly billing.'>
            <div className='space-y-6'>
                <div className='space-y-3.5'>
                    {PLANS.map(plan => (
                        <PlanCard key={plan.name} image={plan.image} name={plan.name}
                                  price={yearlySubs ? plan.priceYearly : plan.priceMonthly}
                                  checked={plan.checked} yearlySubs={yearlySubs}/>
                    ))}

                </div>
                <ToggleButton checked={yearlySubs} onCheckedChange={toggleYearlySubs}/>
            </div>
        </StepCard>
    );
}

export default PlanStep;