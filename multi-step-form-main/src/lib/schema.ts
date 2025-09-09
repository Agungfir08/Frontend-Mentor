import {z} from "zod";

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const PersonalInfoSchema = z.object({
    name: z.string().min(3, {message: "Name must be at least 3 characters"}).nonempty({message: "This field is required"}),
    email: z.email({message: "Invalid email"}).nonempty({message: "This field is required"}),
    phoneNumber: z.string().regex(phoneRegex, {message: "Invalid phone number"}).nonempty({message: "This field is required"}),
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