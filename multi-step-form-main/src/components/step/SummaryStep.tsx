import StepCard from "@/components/StepCard.tsx";
import {Separator} from "@/components/ui/separator.tsx";

function SummaryStep() {
    return (
        <StepCard title='Finishing up' description='Double-check everything looks OK before confirming.'>
            <div className='bg-blue-300/15 rounded-md px-4 py-[18.5px] space-y-3.5'>
                <div className='flex items-center justify-between'>
                    <div>
                        <p className='text-sm text-blue-950 font-medium'>Arcade (monthly)</p>
                        <p className='text-sm text-grey-500 font-medium underline'>Change</p>
                    </div>
                    <p className='text-sm text-blue-950 font-medium'>$9/mo</p>
                </div>
                <Separator/>
                <div className='flex items-center justify-between'>
                    <p className='text-sm text-grey-500'>Online service</p>
                    <p className='text-sm text-blue-950'>+$1/mo</p>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='text-sm text-grey-500'>Large storage</p>
                    <p className='text-sm text-blue-950'>+2/mo</p>
                </div>
            </div>
            <div className='flex items-center justify-between mt-6 px-4'>
                <p className='text-grey-500'>Total (per month)</p>
                <p className='text-purple-600 font-medium'>+12/mo</p>
            </div>
        </StepCard>
    );
}

export default SummaryStep;