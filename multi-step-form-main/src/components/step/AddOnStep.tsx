import StepCard from "@/components/StepCard.tsx";
import AddOnCheckBox from "@/components/AddOnCheckBox.tsx";
import {ADDONS} from "@/lib/constant.ts";
import {useFormContext} from "@/hooks/useFormContext.ts";

function AddOnStep() {
    const {yearlySubs} = useFormContext()
    return (
        <StepCard title='Pick add-ons' description='Add-ons help enhance your gaming experience.'>
            <div className='space-y-3.5'>
                {ADDONS.map(adds => (
                    <AddOnCheckBox key={adds.name} title={adds.name} description={adds.description}
                                   price={yearlySubs ? adds.priceYearly : adds.priceMonthly}/>
                ))}
            </div>
        </StepCard>
    );
}

export default AddOnStep;