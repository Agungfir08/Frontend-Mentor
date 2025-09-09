import {z} from "zod";
import {useState} from "react";
import {FormContext} from "@/context/FormContext.ts";
import {STEPPERS} from "@/lib/constant.ts";
import {FormProvider, useForm} from "react-hook-form";
import {FormSchema} from "@/lib/schema.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {useFormStore} from "@/store/useFormStore.ts";
import type {STEPS} from "@/lib/types";
import PhoneLayout from "@/components/layout/PhoneLayout.tsx";

export function MultiStepForm({step}: { step: STEPS[] }) {
    const [stepIndex, setStepIndex] = useState<number>(1)
    const currentStep = step[stepIndex - 1]
    const isFirstStep = stepIndex === 1
    const isLastStep = stepIndex === STEPPERS.length
    const {formData, setFormData, resetFormData} = useFormStore()

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: formData.name || '',
            email: formData.email || '',
            phoneNumber: formData.phoneNumber || '',
            plan: formData.plan,
            yearlySubscription: formData.yearlySubscription || false,
            addOns: formData.addOns || []
        }
    });

    const yearlySubscription = form.watch('yearlySubscription')

    const nextStep = async () => {
        const isValid = await form.trigger(currentStep.fields)

        if (!isValid) return;

        setFormData(form.getValues())

        if (!isLastStep) {
            setStepIndex(prev => prev + 1)
        }
    }

    const prevStep = () => {
        if (isFirstStep || stepIndex < 1) return
        setStepIndex(prev => prev - 1)
    }

    const submitForm = () => {
        resetFormData()
        form.reset()
        setStepIndex(1)
    }

    const value = {
        stepIndex,
        yearlySubscription,
        isFirstStep,
        isLastStep,
        nextStep,
        prevStep,
    }

    return (
        <FormContext.Provider value={value}>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(submitForm)}>
                    <PhoneLayout title={currentStep.title} description={currentStep.description}
                                 component={currentStep.component}/>
                </form>
            </FormProvider>
        </FormContext.Provider>
    )
}