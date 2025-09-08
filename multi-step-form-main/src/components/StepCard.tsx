import {useFormContext} from "@/hooks/useFormContext.ts";
import PersonalStep from "@/components/steps/PersonalStep.tsx";
import PlanStep from "@/components/steps/PlanStep.tsx";
import AddOnStep from "@/components/steps/AddOnStep.tsx";
import SummaryStep from "@/components/steps/SummaryStep.tsx";

function Step() {
    const {stepIndex} = useFormContext()

    switch (stepIndex) {
        case 1:
            return {
                title: 'Personal info',
                description: 'Please provide your name, email address, and phone number.',
                component: <PersonalStep/>
            }
        case 2:
            return {
                title: 'Select your plan',
                description: 'You have the option of monthly or yearly billing.',
                component: <PlanStep/>
            }
        case 3:
            return {
                title: 'Pick add-ons',
                description: 'Add-ons help enhance your experience.',
                component: <AddOnStep/>
            }
        case 4:
            return {
                title: 'Finishing up',
                description: 'Double-check everything looks OK before confirming.',
                component: <SummaryStep/>
            }
        default:
            return {
                title: 'Personal info',
                description: 'Please provide your name, email address, and phone number.',
                component: <PersonalStep/>
            }
    }
}

function StepCard() {
    const {title, description, component} = Step()

    return (
        <div className='bg-white px-6 py-10 rounded-lg w-full *:first:mb-6'>
            <div className='space-y-3.5'>
                <h2 className='text-2xl font-bold text-blue-950'>{title}</h2>
                <p className='text-grey-500'>{description}</p>
            </div>
            {component}
        </div>
    );
}

export default StepCard;