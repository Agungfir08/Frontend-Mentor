import {createContext} from "react";

export interface FormContextType {
    yearlySubs: boolean;
    toggleYearlySubs: () => void;
}

const INITIAL_STATE: FormContextType = {
    yearlySubs: false,
    toggleYearlySubs: () => {
    }
}

export const FormContext = createContext<FormContextType>(INITIAL_STATE)