import CardStep from "@/components/CardStep.tsx";
import PlanCard from "@/components/RadioPlan.tsx";
import {PLANS} from "@/lib/constant.ts";
import ToggleButton from "@/components/ToggleButton.tsx";
import {useState} from "react";

function PlanStep() {
    const [yearlySubs, setYearlySubs] = useState<boolean>(false)

    const handleYearlySubs = () => {
        setYearlySubs(prev => !prev)
    }

    return (
        <CardStep title='Select your plan' description='You have the option of monthly or yearly billing.'>
            <div className='space-y-6'>
                <div className='space-y-3.5'>
                    {PLANS.map(plan => (
                        <PlanCard key={plan.name} image={plan.image} name={plan.name}
                                  price={yearlySubs ? plan.priceYearly : plan.priceMonthly}
                                  checked={plan.checked} yearlySubs={yearlySubs}/>
                    ))}

                </div>
                <ToggleButton checked={yearlySubs} onCheckedChange={handleYearlySubs}/>
            </div>
        </CardStep>
    );
}

export default PlanStep;