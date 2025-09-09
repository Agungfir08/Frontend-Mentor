import type {ZodType} from "zod";
import {type FormDataType} from "@/lib/schema.ts";

type FieldKeys = keyof FormDataType

interface STEPS {
    title: string,
    description: string,
    component: React.ReactElement,
    validation?: ZodType,
    fields?: FieldKeys[]
}