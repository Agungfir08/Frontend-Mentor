interface StepCardProps {
    title: string;
    description: string;
    component: React.ReactElement;
}

function StepCard({title, description, component}: StepCardProps) {
    return (
        <div className='bg-white px-6 py-10 rounded-lg w-full *:first:mb-6'>
            <div className='space-y-3.5'>
                <h2 className='text-2xl font-bold text-blue-950'>{title}</h2>
                <p className='text-grey-500'>{description}</p>
            </div>
            {component}
        </div>
    );
}

export default StepCard;