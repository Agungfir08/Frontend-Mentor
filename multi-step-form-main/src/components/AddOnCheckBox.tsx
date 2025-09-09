import {Label} from "@/components/ui/label.tsx";
import {Checkbox} from "@/components/ui/checkbox.tsx";
import {useFormContext as useForm} from "@/hooks/useFormContext.ts";
import {Controller, useFormContext} from "react-hook-form";

interface AddOnCheckBoxProps {
    title: string;
    description: string;
    price: number;
}

function AddOnCheckBox({title, description, price}: AddOnCheckBoxProps) {
    const {yearlySubscription} = useForm()
    const {control} = useFormContext()
    const titleKebabCase = title.replace(/\s/g, '-').toLowerCase()
    return (
        <Controller control={control} name={'addOns'} render={({field}) => (
            <Label htmlFor={titleKebabCase}
                   className='flex items-center gap-4 border border-purple-200 px-4 py-3 rounded-md has-[[aria-checked=true]]:bg-blue-300/15 has-[[aria-checked=true]]:outline-purple-600 has-[[aria-checked=true]]:outline cursor-pointer'>
                <Checkbox id={titleKebabCase} value={title.toLowerCase()}
                          checked={field.value.includes(title.toLowerCase())}
                          onCheckedChange={(checked) => {
                              const currentValue = field.value || []
                              if (checked) field.onChange([...currentValue, title.toLowerCase()])
                              else field.onChange(currentValue.filter((item: string) => item !== title.toLowerCase()))
                          }}/>
                <div className='flex items-center justify-between w-full'>
                    <div>
                        <h3 className='text-blue-950 text-sm font-medium'>{title}</h3>
                        <p className='text-grey-500 text-xs '>{description}</p>
                    </div>
                    <p className='text-purple-600 text-xs'>{`+$${price}/${yearlySubscription ? 'yr' : 'mo'}`}</p>
                </div>
            </Label>

        )}/>
    );
}

export default AddOnCheckBox;