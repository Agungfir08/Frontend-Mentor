import {z} from "zod";
import {useState} from "react";
import {FormContext} from "@/context/FormContext.ts";
import {STEPS} from "@/lib/constant.ts";
import {FormProvider as MultiFormProvider, useForm} from "react-hook-form";
import {FormSchema} from "@/lib/schema.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {useFormStore} from "@/store/useFormStore.ts";

export function FormProvider({children}: { children: React.ReactNode }) {
    const {formData} = useFormStore()

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: formData.name,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            plan: formData.plan,
            yearlySubscription: formData.yearlySubscription,
            addOns: formData.addOns
        }
    });


    const [stepIndex, setStepIndex] = useState<number>(1)
    const [yearlySubs, setYearlySubs] = useState<boolean>(false)
    const isFirstStep = stepIndex === 1
    const isLastStep = stepIndex === STEPS.length

    const nextStep = () => {
        if (isLastStep) return
        setStepIndex(prev => prev + 1)
    }

    const prevStep = () => {
        if (isFirstStep || stepIndex < 1) return
        setStepIndex(prev => prev - 1)
    }

    const toggleYearlySubs = () => {
        setYearlySubs(prev => !prev)
    }

    const value = {
        stepIndex,
        yearlySubs,
        toggleYearlySubs,
        isFirstStep,
        isLastStep,
        nextStep,
        prevStep,
    }

    return (
        <FormContext.Provider value={value}>
            <MultiFormProvider {...form}>
                {children}
            </MultiFormProvider>
        </FormContext.Provider>
    )
}