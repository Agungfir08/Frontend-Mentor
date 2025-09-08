import {Label} from "@/components/ui/label.tsx";
import {Checkbox} from "@/components/ui/checkbox.tsx";
import {useFormContext} from "@/hooks/useFormContext.ts";

interface AddOnCheckBoxProps {
    title: string;
    description: string;
    price: number;
}

function AddOnCheckBox({title, description, price}: AddOnCheckBoxProps) {
    const {yearlySubs} = useFormContext()
    return (
        <Label htmlFor={title.replace(/\s/g, '-').toLowerCase()}
               className='flex items-center gap-4 border border-purple-200 px-4 py-3 rounded-md has-[[aria-checked=true]]:bg-blue-300/15 has-[[aria-checked=true]]:outline-purple-600 has-[[aria-checked=true]]:outline cursor-pointer'>
            <Checkbox id={title.replace(/\s/g, '-').toLowerCase()} defaultChecked/>
            <div className='flex items-center justify-between w-full'>
                <div>
                    <h3 className='text-blue-950 text-sm font-medium'>{title}</h3>
                    <p className='text-grey-500 text-xs '>{description}</p>
                </div>
                <p className='text-purple-600 text-xs'>{`+$${price}/${yearlySubs ? 'yr' : 'mo'}`}</p>
            </div>
        </Label>
    );
}

export default AddOnCheckBox;