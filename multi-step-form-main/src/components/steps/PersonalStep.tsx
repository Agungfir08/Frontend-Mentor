import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {useFormContext} from "react-hook-form";
import {z} from 'zod';
import {FormSchema} from "@/lib/schema.ts";

function PersonalStep() {
    const {register} = useFormContext<z.infer<typeof FormSchema>>()
    return (
        <div className='space-y-4'>
            <div className='space-y-1'>
                <Label htmlFor='name' className='text-blue-950'>Name</Label>
                <Input id='name' type='text' placeholder='e.g. Stephen King' {...register('name')}/>
            </div>
            <div className='space-y-1'>
                <Label htmlFor='emailAdd' className='text-blue-950'>Email Address</Label>
                <Input id='emailAdd' type='email' placeholder='e.g. stephenking@lorem.com' {...register('email')}/>
            </div>
            <div className='space-y-1'>
                <Label htmlFor='phoneNumber' className='text-blue-950'>Phone Number</Label>
                <Input id='phoneNumber' type='number' placeholder='e.g. +1 234 567 890' {...register("phoneNumber")}/>
            </div>
        </div>
    );
}

export default PersonalStep;