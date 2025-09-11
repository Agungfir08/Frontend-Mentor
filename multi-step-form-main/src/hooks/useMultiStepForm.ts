import { useState } from 'react';
import { type UseFormReturn } from 'react-hook-form';
import { useFormStore } from '@/store/useFormStore.ts';
import type { STEPS } from '@/lib/types';
import type { FormDataType } from '@/lib/schema';

interface useMultiStepFormProps {
    steps: STEPS[];
    form: UseFormReturn<FormDataType>;
}

export function useMultiStepForm({ steps, form }: useMultiStepFormProps) {
    const [stepIndex, setStepIndex] = useState<number>(0);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const currentStep = steps[stepIndex];
    const { setFormData, resetFormData } = useFormStore();

    const nextStep = async () => {
        const isValid = await form.trigger(currentStep.fields);

        if (!isValid) return;

        setFormData(form.getValues());

        if (stepIndex < steps.length - 1) {
            setStepIndex((prev) => prev + 1);
        }
    };

    const prevStep = () => {
        if (stepIndex > 0) {
            setStepIndex((prev) => prev - 1);
        }
    };

    const goToStep = (index: number) => {
        if (index >= 0 && index < steps.length) {
            setStepIndex(index);
        }
    };

    const submitForm = async (data: FormDataType) => {
        console.log('Form submitted successfully:', data);
        setIsSubmitted(true);

        setTimeout(() => {
            resetFormData();
            form.reset();
            setIsSubmitted(false);
            setStepIndex(0);
        }, 4000);
    };

    return {
        stepIndex,
        currentStep,
        isFirstStep: stepIndex === 0,
        isLastStep: stepIndex === steps.length - 1,
        isSubmitted,
        nextStep,
        prevStep,
        goToStep,
        submitForm,
        yearlySubscription: !!form.watch('yearlySubscription'),
    };
}
