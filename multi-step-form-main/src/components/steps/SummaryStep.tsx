import { Separator } from '@/components/ui/separator.tsx';
import { useFormStore } from '@/store/useFormStore.ts';
import { ADDON_PRICES, PLAN_PRICES } from '@/lib/constant.ts';
import { useMultiStepContext } from '@/hooks/useMultiStepContext';

function SummaryStep() {
    const { formData } = useFormStore();
    const { plan, yearlySubscription, addOns } = formData;
    const { goToStep } = useMultiStepContext();

    const subscriptionType = yearlySubscription ? 'yearly' : 'monthly';
    const subscriptionAbbr = yearlySubscription ? 'yr' : 'mo';

    const planPrice =
        PLAN_PRICES[subscriptionType][
            plan as keyof (typeof PLAN_PRICES)[typeof subscriptionType]
        ];
    const addOnTotalPrice =
        addOns?.reduce(
            (acc, addOn) =>
                acc +
                ADDON_PRICES[subscriptionType][
                    addOn as keyof (typeof ADDON_PRICES)[typeof subscriptionType]
                ],
            0
        ) || 0;

    const totalPrice = planPrice + addOnTotalPrice;
    return (
        <>
            <div className="bg-blue-300/15 rounded-md px-4 py-[18.5px] space-y-3.5">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm lg:text-base text-blue-950 font-medium">{`${plan} (${subscriptionType})`}</p>
                        <button
                            type="button"
                            className="text-sm lg:text-base text-grey-500 font-medium underline lg:tracking-tighter cursor-pointer"
                            onClick={(e) => {
                                e.preventDefault();
                                goToStep(1);
                            }}>
                            Change
                        </button>
                    </div>
                    <p className="text-sm lg:text-base text-blue-950 font-medium">{`+${planPrice}/${subscriptionAbbr}`}</p>
                </div>
                <Separator />
                {addOns &&
                    addOns.map((addOn) => {
                        const addOnPrice =
                            ADDON_PRICES[subscriptionType][
                                addOn as keyof (typeof ADDON_PRICES)[typeof subscriptionType]
                            ];
                        return (
                            <div
                                key={addOn}
                                className="flex items-center justify-between">
                                <p className="text-sm lg:text-base text-grey-500 capitalize lg:tracking-tighter">
                                    {addOn}
                                </p>
                                <p className="text-sm text-blue-950">{`+${addOnPrice}/${subscriptionAbbr}`}</p>
                            </div>
                        );
                    })}
            </div>
            <div className="flex items-center justify-between mt-6 px-4">
                <p className="text-grey-500 lg:tracking-tighter">{`Total (per ${subscriptionType.replace(
                    'ly',
                    ''
                )})`}</p>
                <p className="text-[20px] text-purple-600 font-medium">{`+${totalPrice}/${subscriptionAbbr}`}</p>
            </div>
        </>
    );
}

export default SummaryStep;
