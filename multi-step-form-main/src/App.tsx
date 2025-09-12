import PersonalStep from '@/components/steps/PersonalStep.tsx';
import PlanStep from '@/components/steps/PlanStep.tsx';
import AddOnStep from '@/components/steps/AddOnStep.tsx';
import SummaryStep from '@/components/steps/SummaryStep.tsx';
import { AddOnSchema, PersonalInfoSchema, PlanSchema } from '@/lib/schema.ts';
import type { STEPS } from '@/lib/types';
import MultiStepFormLayout from './components/layout/MultiStepFormLayout';

const App = () => {
    const STEPS: STEPS[] = [
        {
            title: 'Personal info',
            description:
                'Please provide your name, email address, and phone number.',
            component: <PersonalStep />,
            fields: PersonalInfoSchema.keyof().options,
        },
        {
            title: 'Select your plan',
            description: 'You have the option of monthly or yearly billing.',
            component: <PlanStep />,
            fields: PlanSchema.keyof().options,
        },
        {
            title: 'Pick add-ons',
            description: 'Add-ons help enhance your experience.',
            component: <AddOnStep />,
            fields: AddOnSchema.keyof().options,
        },
        {
            title: 'Finishing up',
            description: 'Double-check everything looks OK before confirming.',
            component: <SummaryStep />,
        },
    ];

    return (
        <main>
            <MultiStepFormLayout steps={STEPS} />
        </main>
    );
};

export default App;
