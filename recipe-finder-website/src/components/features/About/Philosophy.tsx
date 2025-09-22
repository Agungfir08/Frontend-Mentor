import List from './List';

function Philosophy() {
    const PHILOSOPHY = [
        {
            title: 'Whole ingredients first.',
            description:
                'Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe.',
        },
        {
            title: 'Flavor without compromise.',
            description:
                'Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.',
        },
        {
            title: 'Respect for time.',
            description:
                'Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful.',
        },
        {
            title: 'Sustainable choices.',
            description:
                'Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly.',
        },
    ];

    return (
        <div className="grid xl:grid-cols-[1fr_2fr] gap-10 xl:gap-16 py-12 md:py-20 xl:py-24">
            <h2 className="heading-2 text-neutral-900">Our food philosophy</h2>
            <div className="space-y-12">
                {PHILOSOPHY.map(({ title, description }) => (
                    <List key={title} title={title} description={description} />
                ))}
            </div>
        </div>
    );
}

export default Philosophy;
