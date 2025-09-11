import AddOnCheckBox from '@/components/AddOnCheckBox.tsx';
import { useMultiStepContext } from '@/hooks/useMultiStepContext';
import { ADDONS } from '@/lib/constant.ts';

function AddOnStep() {
    const { yearlySubscription } = useMultiStepContext();
    return (
        <div className="space-y-3.5 lg:space-y-4">
            {ADDONS.map(({ name, description, priceMonthly, priceYearly }) => (
                <AddOnCheckBox
                    key={name}
                    title={name}
                    description={description}
                    price={yearlySubscription ? priceYearly : priceMonthly}
                />
            ))}
        </div>
    );
}

export default AddOnStep;
