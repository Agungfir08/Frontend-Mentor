import {Input} from "@/components/ui/input.tsx";
import {useFormContext} from "react-hook-form";
import {z} from 'zod';
import {FormSchema} from "@/lib/schema.ts";
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";

function PersonalStep() {
    const {control} = useFormContext<z.infer<typeof FormSchema>>()
    return (
        <div className='space-y-4'>
            <FormField
                control={control}
                name="name"
                render={({field}) => (
                    <FormItem>
                        <div className='flex items-center justify-between'>
                            <FormLabel>Username</FormLabel>
                            <FormMessage/>
                        </div>
                        <FormControl>
                            <Input type='text' placeholder='e.g. Stephen King' {...field} />
                        </FormControl>
                    </FormItem>
                )}
            />

            <FormField
                control={control}
                name="email"
                render={({field}) => (
                    <FormItem>
                        <div className='flex items-center justify-between'>
                            <FormLabel>Email Address</FormLabel>
                            <FormMessage/>
                        </div>
                        <FormControl>
                            <Input type='email' placeholder='e.g. stephenking@lorem.com' {...field} />
                        </FormControl>
                    </FormItem>
                )}
            />

            <FormField
                control={control}
                name="phoneNumber"
                render={({field}) => (
                    <FormItem>
                        <div className='flex items-center justify-between'>
                            <FormLabel>Phone Number</FormLabel>
                            <FormMessage/>
                        </div>
                        <FormControl>
                            <Input type='number' placeholder='e.g. +1 234 567 890' {...field} />
                        </FormControl>
                    </FormItem>
                )}
            />

        </div>
    );
}

export default PersonalStep;