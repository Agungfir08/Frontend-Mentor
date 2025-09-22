import List from './List';

function Exist() {
    const EXIST_REASON = [
        {
            title: 'Cut through the noise.',
            description:
                'The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking.',
        },
        {
            title: 'Empower home kitchens.',
            description:
                'When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep.',
        },
        {
            title: 'Make healthy look good',
            description:
                'High-resolution imagery shows you exactly what success looks like—because we eat with our eyes first, and confidence matters.',
        },
    ];

    return (
        <div className="grid xl:grid-cols-[1fr_2fr] gap-10 xl:gap-16 py-12 md:py-20 xl:py-24">
            <h2 className="heading-2 text-neutral-900">Why we exist</h2>
            <div className="space-y-12">
                {EXIST_REASON.map(({ title, description }) => (
                    <List key={title} title={title} description={description} />
                ))}
            </div>
        </div>
    );
}

export default Exist;
