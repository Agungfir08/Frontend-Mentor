import {createContext} from "react";

export interface FormContextType {
    stepIndex: number;
    yearlySubscription: boolean;
    isFirstStep: boolean;
    isLastStep: boolean;
    nextStep: () => void;
    prevStep: () => void;
}

const INITIAL_STATE: FormContextType = {
    stepIndex: 1,
    yearlySubscription: false,
    isFirstStep: true,
    isLastStep: false,
    nextStep: () => {
    },
    prevStep: () => {
    }
}

export const FormContext = createContext<FormContextType>(INITIAL_STATE)