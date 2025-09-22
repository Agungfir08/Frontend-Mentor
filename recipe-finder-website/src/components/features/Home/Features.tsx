import IconFeatureCard from './IconFeatureCard';
import IconWholeFood from '/images/icon-whole-food-recipes.svg';
import IconMinimumFuss from '/images/icon-minimum-fuss.svg';
import IconSearchInSecond from '/images/icon-search-in-seconds.svg';

function Features() {
    const FEATURES_LIST = [
        {
            title: 'Whole-food recipes',
            description: 'Each dish uses everyday, unprocessed ingredients.',
            src: IconWholeFood,
            alt: 'whole-food icon',
        },
        {
            title: 'Minimum Fuss',
            description:
                'All recipes are designed to make eating healthy quick and easy.',
            src: IconMinimumFuss,
            alt: 'minimum fuss icon',
        },
        {
            title: 'Search in seconds',
            description:
                'Filter by name or ingredient and jump straight to the recipe you need.',
            src: IconSearchInSecond,
            alt: 'search in seconds icon',
        },
    ];

    return (
        <section className="max-md:space-y-8 space-y-12 md:pb-20 xl:pb-24">
            <h2 className="heading-2 text-neutral-900 lg:text-center">
                What you'll get
            </h2>
            <div className="grid xl:grid-cols-3 gap-8">
                {FEATURES_LIST.map(({ title, description, src, alt }) => (
                    <div key={title} className="space-y-6">
                        <IconFeatureCard src={src} alt={alt} />
                        <div className="space-y-3">
                            <h3 className="sub-heading text-neutral-900">
                                {title}
                            </h3>
                            <p className="text-body--xl--sans text-neutral-600">
                                {description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Features;
