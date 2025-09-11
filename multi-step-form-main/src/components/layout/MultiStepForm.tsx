import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useFormStore } from '@/store/useFormStore.ts';
import type { STEPS } from '@/lib/types';
import { FormSchema, type FormDataType } from '@/lib/schema';
import { MultiStepContext } from '@/context/MultiStepContext';
import Stepper from '../Stepper';
import ThankYouCard from '../ThankYouCard';
import StepCard from '../StepCard';
import FooterButton from '../FooterButton';
import { zodResolver } from '@hookform/resolvers/zod';

interface useMultiStepFormProps {
    steps: STEPS[];
}

export function MultiStepForm({ steps }: useMultiStepFormProps) {
    const [stepIndex, setStepIndex] = useState<number>(0);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const currentStep = steps[stepIndex];
    const { formData, setFormData, resetFormData } = useFormStore();
    const isFirstStep = stepIndex === 0;
    const isLastStep = stepIndex === steps.length - 1;
    console.log(stepIndex);

    const method = useForm<FormDataType>({
        resolver: zodResolver(FormSchema),
        defaultValues: formData,
    });

    const nextStep = async () => {
        const isValid = await method.trigger(currentStep.fields);

        if (!isValid) return;

        setFormData(method.getValues());

        if (stepIndex < steps.length - 1) {
            setStepIndex((prev) => prev + 1);
        }
    };

    const prevStep = () => {
        if (stepIndex > 0) {
            setStepIndex((prev) => prev - 1);
        }
    };

    const submitForm = () => {
        setIsSubmitted(true);

        setTimeout(() => {
            resetFormData();
            method.reset();
            setIsSubmitted(false);
            setStepIndex(0);
        }, 4000);
    };

    const value = {
        stepIndex,
        currentStep,
        isFirstStep,
        isLastStep,
        isSubmitted,
        nextStep,
        prevStep,
        submitForm,
        yearlySubscription: !!method.watch('yearlySubscription'),
    };

    return (
        <MultiStepContext.Provider value={value}>
            <FormProvider {...method}>
                <form onSubmit={method.handleSubmit(submitForm)}>
                    <div className="flex flex-col items-center max-lg:py-[100px] h-screen">
                        <Stepper />
                        <div className="z-10 w-full max-w-[343px]">
                            {isSubmitted ? (
                                <ThankYouCard />
                            ) : (
                                <StepCard
                                    title={currentStep.title}
                                    description={currentStep.description}>
                                    {currentStep.component}
                                </StepCard>
                            )}
                        </div>
                        <div className="fixed bottom-0 left-0 w-full z-20">
                            <FooterButton
                                isFirstStep={isFirstStep}
                                isLastStep={isLastStep}
                                onClickNext={nextStep}
                                onClickBack={prevStep}
                            />
                        </div>
                    </div>
                </form>
            </FormProvider>
        </MultiStepContext.Provider>
    );
}
