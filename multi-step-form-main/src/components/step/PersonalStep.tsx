import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import StepCard from "@/components/StepCard.tsx";

function PersonalStep() {
    return (
        <StepCard title='Personal Information' description='Please provide your name, email address, and phone number.'>
            <form className='space-y-4'>
                <div className='space-y-1'>
                    <Label htmlFor='name' className='text-blue-950'>Name</Label>
                    <Input id='name' type='text' placeholder='e.g. Stephen King'/>
                </div>
                <div className='space-y-1'>
                    <Label htmlFor='emailAdd' className='text-blue-950'>Email Address</Label>
                    <Input id='emailAdd' type='email' placeholder='e.g. stephenking@lorem.com'/>
                </div>
                <div className='space-y-1'>
                    <Label htmlFor='phoneNumber' className='text-blue-950'>Phone Number</Label>
                    <Input id='phoneNumber' type='number' placeholder='e.g. +1 234 567 890'/>
                </div>
            </form>
        </StepCard>
    );
}

export default PersonalStep;