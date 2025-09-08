import {STEPS} from "@/lib/constant.ts";

function Stepper() {
    return (
        <div
            className='bg-[url(/bg-sidebar-mobile.svg)] w-full h-[172px] bg-cover py-8 max-lg:absolute max-lg:top-0 max-lg:left-0'>
            <div className='flex items-center justify-center gap-3.5'>
                {STEPS.map(({step, title}, index) => (
                    <button key={step} type='button'
                            className='bg-transparent size-9 border border-white rounded-full flex items-center justify-center cursor-pointer'>
                        <span className='text-white font-medium'>{index + 1}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Stepper;