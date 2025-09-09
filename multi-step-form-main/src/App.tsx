import PersonalStep from "@/components/steps/PersonalStep.tsx";
import PlanStep from "@/components/steps/PlanStep.tsx";
import AddOnStep from "@/components/steps/AddOnStep.tsx";
import SummaryStep from "@/components/steps/SummaryStep.tsx";
import {AddOnSchema, PersonalInfoSchema, PlanSchema} from "@/lib/schema.ts";
import type {STEPS} from "@/lib/types";
import {MultiStepForm} from "@/context/MultiStepForm.tsx";

const App = () => {
    const STEPS: STEPS[] = [
        {
            title: 'Personal info',
            description: 'Please provide your name, email address, and phone number.',
            component: <PersonalStep/>,
            fields: Object.keys(PersonalInfoSchema.shape)
        },
        {
            title: 'Select your plan',
            description: 'You have the option of monthly or yearly billing.',
            component: <PlanStep/>,
            fields: Object.keys(PlanSchema.shape)
        },
        {
            title: 'Pick add-ons',
            description: 'Add-ons help enhance your experience.',
            component: <AddOnStep/>,
            fields: Object.keys(AddOnSchema.shape)
        },
        {
            title: 'Finishing up',
            description: 'Double-check everything looks OK before confirming.',
            component: <SummaryStep/>
        }
    ]

    return (
        <main>
            <MultiStepForm step={STEPS}/>
        </main>
    );
};

export default App;