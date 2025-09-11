import { MultiStepContext } from '@/context/MultiStepContext';
import type { STEPS } from '@/lib/types';
import { FormProvider, useForm } from 'react-hook-form';
import { useFormStore } from '@/store/useFormStore';
import { FormSchema, type FormDataType } from '@/lib/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMultiStepForm } from '@/hooks/useMultiStepForm';
import StepCard from '../StepCard';
import ThankYouCard from '../ThankYouCard';
import Stepper from '../Stepper';
import FooterButton from '../FooterButton';
import { cn } from '@/lib/utils';

interface MultiStepFormLayoutProps {
    steps: STEPS[];
}

function MultiStepFormLayout({ steps }: MultiStepFormLayoutProps) {
    const { formData } = useFormStore();

    const form = useForm<FormDataType>({
        resolver: zodResolver(FormSchema),
        defaultValues: formData,
    });

    const multiStep = useMultiStepForm({ steps, form });

    return (
        <MultiStepContext.Provider value={multiStep}>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(multiStep.submitForm)}>
                    <div className="flex flex-col items-center lg:justify-center min-h-screen max-lg:py-[100px]">
                        <div className="flex flex-col lg:flex-row lg:bg-white lg:p-4 lg:rounded-lg lg:w-[940px]">
                            <Stepper />
                            <div className="relative lg:w-[450px] lg:mx-auto">
                                <div
                                    className={cn(
                                        'relative z-10 w-full max-lg:max-w-[343px]',
                                        {
                                            'flex h-full justify-center':
                                                multiStep.isSubmitted,
                                        }
                                    )}>
                                    {multiStep.isSubmitted ? (
                                        <ThankYouCard />
                                    ) : (
                                        <StepCard
                                            title={multiStep.currentStep.title}
                                            description={
                                                multiStep.currentStep
                                                    .description
                                            }>
                                            {multiStep.currentStep.component}
                                        </StepCard>
                                    )}
                                </div>
                                <div
                                    className={cn(
                                        'fixed lg:absolute bottom-0 left-0 w-full z-20',
                                        {
                                            hidden: multiStep.isSubmitted,
                                        }
                                    )}>
                                    <FooterButton
                                        isFirstStep={multiStep.isFirstStep}
                                        isLastStep={multiStep.isLastStep}
                                        onClickNext={multiStep.nextStep}
                                        onClickBack={multiStep.prevStep}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </FormProvider>
        </MultiStepContext.Provider>
    );
}

export default MultiStepFormLayout;
