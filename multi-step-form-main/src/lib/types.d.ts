import {type FormDataType} from "@/lib/schema.ts";

type FieldKeys = keyof FormDataType

interface STEPS {
    title: string,
    description: string,
    component: React.ReactElement,
    fields?: FieldKeys[]
}