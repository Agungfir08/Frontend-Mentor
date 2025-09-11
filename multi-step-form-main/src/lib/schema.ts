import { z } from 'zod';

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const PersonalInfoSchema = z.object({
    name: z
        .string()
        .nonempty({ message: 'This field is required' })
        .min(3, { message: 'Name must be at least 3 characters' }),
    email: z
        .string()
        .nonempty({ message: 'This field is required' })
        .email({ message: 'Invalid email' }),
    phoneNumber: z
        .string()
        .nonempty({ message: 'This field is required' })
        .regex(phoneRegex, { message: 'Invalid phone number' }),
});

export const PlanSchema = z.object({
    plan: z.enum(['Arcade', 'Advanced', 'Pro']),
    yearlySubscription: z.boolean(),
});

export const AddOnSchema = z.object({
    addOns: z.array(z.string()).optional(),
});

export const FormSchema =
    PersonalInfoSchema.merge(PlanSchema).merge(AddOnSchema);

export type FormDataType = z.infer<typeof FormSchema>;
