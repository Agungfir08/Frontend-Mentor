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
    const [stepIndex, setStepIndex] = useState<number>(1);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const currentStep = steps[stepIndex - 1];
    const isFirstStep = stepIndex === 1;
    const isLastStep = stepIndex === steps.length;
    const { setFormData, resetFormData } = useFormStore();

    const nextStep = async () => {
        const isValid = await form.trigger(currentStep.fields);

        if (!isValid) return;

        setFormData(form.getValues());

        if (stepIndex < steps.length) {
            setStepIndex((prev) => prev + 1);
        }
    };

    const prevStep = () => {
        if (stepIndex > 1) {
            setStepIndex((prev) => prev - 1);
        }
    };

    const submitForm = (data: FormDataType) => {
        console.log('submit form', data);

        setIsSubmitted(true);
        setFormData(data);

        setTimeout(() => {
            resetFormData();
            form.reset();
            setIsSubmitted(false);
            setStepIndex(1);
        }, 4000);
    };

    return {
        stepIndex,
        currentStep,
        isFirstStep,
        isLastStep,
        isSubmitted,
        nextStep,
        prevStep,
        submitForm,
        yearlySubscription: !!form.watch('yearlySubscription'),
    };
}
