import {Button} from "@/components/ui/button.tsx";
import {useFormContext} from "@/hooks/useFormContext.ts";
import {cn} from "@/lib/utils.ts";

function FooterButton() {
    const {isFirstStep, isLastStep, nextStep, prevStep} = useFormContext()
    return (
        <div className={cn('bg-white flex items-center p-4 w-full', {
            'justify-between': !isFirstStep,
            'justify-end': isFirstStep,
        })}>
            {!isFirstStep && (
                <Button variant='ghost' type='button' onClick={prevStep}>Go Back</Button>
            )}
            <Button variant='default' size='lg' type={isLastStep ? 'submit' : 'button'}
                    onClick={nextStep}>{isLastStep ? 'Confirm' : 'Next Step'}</Button>
        </div>
    );
}

export default FooterButton;