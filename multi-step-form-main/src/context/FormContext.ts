import {createContext} from "react";

export interface FormContextType {
    stepIndex: number;
    yearlySubs: boolean;
    isFirstStep: boolean;
    isLastStep: boolean;
    toggleYearlySubs: () => void;
    nextStep: () => void;
    prevStep: () => void;
}

const INITIAL_STATE: FormContextType = {
    stepIndex: 1,
    yearlySubs: false,
    isFirstStep: true,
    isLastStep: false,
    toggleYearlySubs: () => {
    }
    ,
    nextStep: () => {
    },
    prevStep: () => {
    }
}

export const FormContext = createContext<FormContextType>(INITIAL_STATE)