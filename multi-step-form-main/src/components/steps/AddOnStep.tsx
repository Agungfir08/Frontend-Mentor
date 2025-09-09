import AddOnCheckBox from "@/components/AddOnCheckBox.tsx";
import {ADDONS} from "@/lib/constant.ts";
import {useFormContext} from "@/hooks/useFormContext.ts";

function AddOnStep() {
    const {yearlySubscription} = useFormContext()
    return (
        <div className='space-y-3.5'>
            {ADDONS.map(({name, description, priceMonthly, priceYearly}) => (
                <AddOnCheckBox key={name} title={name} description={description}
                               price={yearlySubscription ? priceYearly : priceMonthly}/>
            ))}
        </div>
    );
}

export default AddOnStep;