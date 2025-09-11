interface StepCardProps {
    title: string;
    description: string;
    children: React.ReactNode;
}

function StepCard({ title, description, children }: StepCardProps) {
    return (
        <div className="bg-white max-lg:px-6 py-10 rounded-lg w-full *:first:mb-6 lg:*:first:mb-[42px]">
            <div className="space-y-3.5 lg:space-y-3">
                <h2 className="text-2xl lg:text-[32px] font-bold text-blue-950">
                    {title}
                </h2>
                <p className="text-grey-500">{description}</p>
            </div>
            {children}
        </div>
    );
}

export default StepCard;
