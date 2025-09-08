import {Button} from "@/components/ui/button.tsx";
import {useFormContext} from "@/hooks/useFormContext.ts";
import {cn} from "@/lib/utils.ts";

function FooterButton() {
    const {stepIndex, isFirstStep, isLastStep, nextStep, prevStep} = useFormContext()
    console.log(stepIndex)
    return (
        <div className={cn('bg-white flex items-center p-4 w-full', {
            'justify-between': !isFirstStep,
            'justify-end': isFirstStep,
        })}>
            {!isFirstStep && (
                <Button variant='ghost' onClick={prevStep}>Go Back</Button>
            )}
            <Button variant='default' size='lg' onClick={nextStep}>{isLastStep ? 'Confirm' : 'Next Step'}</Button>
        </div>
    );
}

export default FooterButton;