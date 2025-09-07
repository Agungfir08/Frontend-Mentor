interface HeadingStepProps {
    title: string;
    description: string;
}

function HeadingStep({title, description}: HeadingStepProps) {
    return (
        <div className='space-y-3.5'>
            <h2 className='text-2xl font-bold text-blue-950'>{title}</h2>
            <p className='text-grey-500'>{description}</p>
        </div>
    );
}

export default HeadingStep;