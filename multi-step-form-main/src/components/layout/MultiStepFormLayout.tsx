import { MultiStepContext } from '@/context/MultiStepContext';
import type { STEPS } from '@/lib/types';
import { FormProvider, useForm } from 'react-hook-form';
import PhoneLayout from './PhoneLayout';
import { useFormStore } from '@/store/useFormStore';
import { FormSchema, type FormDataType } from '@/lib/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMultiStepForm } from '@/hooks/useMultiStepForm';
import StepCard from '../StepCard';
import ThankYouCard from '../ThankYouCard';

interface MultiStepFormLayoutProps {
    steps: STEPS[];
}

function MultiStepFormLayout({ steps }: MultiStepFormLayoutProps) {
    const { formData } = useFormStore();

    const form = useForm<FormDataType>({
        resolver: zodResolver(FormSchema),
        defaultValues: formData,
    });

    const multiStep = useMultiStepForm({ steps, form });
    console.log('isSubmitted :', multiStep.isSubmitted);

    return (
        <MultiStepContext.Provider value={multiStep}>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(multiStep.submitForm)}>
                    <PhoneLayout>
                        {multiStep.isSubmitted ? (
                            <ThankYouCard />
                        ) : (
                            <StepCard
                                title={multiStep.currentStep.title}
                                description={multiStep.currentStep.description}>
                                {multiStep.currentStep.component}
                            </StepCard>
                        )}
                    </PhoneLayout>
                </form>
            </FormProvider>
        </MultiStepContext.Provider>
    );
}

export default MultiStepFormLayout;
