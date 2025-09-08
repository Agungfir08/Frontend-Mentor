import {useState} from "react";
import {FormContext} from "@/context/FormContext.ts";

export function FormProvider({children}: { children: React.ReactNode }) {
    const [yearlySubs, setYearlySubs] = useState<boolean>(false)

    const toggleYearlySubs = () => {
        setYearlySubs(prev => !prev)
    }

    const value = {
        yearlySubs,
        toggleYearlySubs
    }

    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}