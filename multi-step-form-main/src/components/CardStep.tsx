import HeadingStep from "@/components/HeadingStep.tsx";

interface CardStepProps {
    title: string;
    description: string;
    children: React.ReactNode;
}

function CardStep({title, description, children}: CardStepProps) {
    return (
        <div className='bg-white px-6 py-10 rounded-lg max-w-[343px] w-full *:first:mb-6'>
            <HeadingStep title={title} description={description}/>
            {children}
        </div>
    );
}

export default CardStep;