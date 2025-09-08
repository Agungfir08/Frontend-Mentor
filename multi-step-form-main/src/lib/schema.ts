import {z} from "zod";

export const PersonalInfoSchema = z.object({
    name: z.string().min(3, {message: "Name must be at least 3 characters"}),
    email: z.email({message: "Invalid email"}),
    phoneNumber: z.e164()
})

export const PlanSchema = z.object({
    plan: z.enum(['Arcade', 'Advanced', 'Pro']),
    yearlySubscription: z.boolean(),
})

export const AddOnSchema = z.object({
    addOns: z.array(z.string()).optional(),
})

export const FormSchema = PersonalInfoSchema.merge(PlanSchema).merge(AddOnSchema)

export type FormDataType = z.infer<typeof FormSchema>