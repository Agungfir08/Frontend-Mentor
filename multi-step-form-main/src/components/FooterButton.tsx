import { Button } from '@/components/ui/button.tsx';
import { cn } from '@/lib/utils.ts';
import type { MouseEventHandler } from 'react';

interface FooterButtonProps {
    isFirstStep: boolean;
    isLastStep: boolean;
    onClickNext: MouseEventHandler<HTMLButtonElement>;
    onClickBack: MouseEventHandler<HTMLButtonElement>;
}

function FooterButton({
    isFirstStep,
    isLastStep,
    onClickNext,
    onClickBack,
}: FooterButtonProps) {
    const primaryButtonType = isLastStep ? 'submit' : 'button';
    return (
        <div
            className={cn(
                'bg-white flex items-center max-lg:p-4 lg:py-4 w-full',
                {
                    'justify-between': !isFirstStep,
                    'justify-end': isFirstStep,
                }
            )}>
            {!isFirstStep && (
                <Button variant="ghost" type="button" onClick={onClickBack}>
                    Go Back
                </Button>
            )}
            <Button
                variant="default"
                size="lg"
                type={primaryButtonType}
                className={cn({
                    'bg-purple-600 hover:bg-purple-600/50': isLastStep,
                })}
                onClick={
                    !isLastStep
                        ? (e) => {
                              e.preventDefault();
                              onClickNext(e);
                          }
                        : undefined
                }>
                {isLastStep ? 'Confirm' : 'Next Step'}
            </Button>
        </div>
    );
}

export default FooterButton;
