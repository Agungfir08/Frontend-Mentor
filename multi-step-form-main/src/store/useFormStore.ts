import {create} from 'zustand'
import {createJSONStorage, persist} from "zustand/middleware";
import type {FormDataType} from "@/lib/schema.ts";

interface FormStore {
    formData: Partial<FormDataType>,
    setFormData: (data: Partial<FormDataType>) => void,
    resetFormData: () => void,
}

const INITIAL_STATE: Partial<FormDataType> = {
    name: '',
    email: '',
    phoneNumber: '',
    plan: undefined,
    yearlySubscription: false,
    addOns: []
}

export const useFormStore = create<FormStore>()(
    persist(
        (set) => ({
            formData: INITIAL_STATE,
            setFormData: (data) => set((state) => ({
                formData: {...state.formData, ...data}
            })),
            resetFormData: () => set({
                formData: INITIAL_STATE
            })
        }),
        {
            name: 'multi-step-form',
            storage: createJSONStorage(() => sessionStorage)
        }
    )
)