import type { FormDataType } from '@/lib/schema';
import type { STEPS } from '@/lib/types';
import { createContext } from 'react';

export interface MultiStepContextType {
    stepIndex: number;
    yearlySubscription: boolean;
    isFirstStep: boolean;
    isLastStep: boolean;
    isSubmitted: boolean;
    currentStep: STEPS;
    nextStep: () => Promise<void>;
    prevStep: () => void;
    goToStep: (index: number) => void;
    submitForm: (data: FormDataType) => void;
}

const INITIAL_STATE: MultiStepContextType = {
    stepIndex: 1,
    yearlySubscription: false,
    isFirstStep: true,
    isLastStep: false,
    isSubmitted: false,
    currentStep: {
        title: '',
        description: '',
        component: <></>,
        fields: [],
    },
    nextStep: async () => {},
    prevStep: () => {},
    goToStep: (_index: number): void => {},
    submitForm: () => {},
};

export const MultiStepContext =
    createContext<MultiStepContextType>(INITIAL_STATE);
