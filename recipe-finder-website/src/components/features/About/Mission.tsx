import Badge from '../../badge';
import PatternIllustration from '/images/pattern-squiggle-2.svg';

function Mission() {
    return (
        <section className="grid xl:grid-cols-[1fr_1.2fr] xl:items-center gap-10 md:gap-16 pb-12 md:pb-20 xl:pb-24">
            <div className="space-y-6">
                <Badge>Our Mission</Badge>
                <h2 className="heading-2 text-neutral-900">
                    Help more people cook nourishing meals, more often.
                </h2>
                <div className="space-y-4">
                    <p className="text-body--xl--sans text-neutral-600">
                        Healthy Recipe Finder was created to prove that healthy
                        eating can be convenient, affordable, and genuinely
                        delicious.
                    </p>
                    <p className="text-body--xl--sans text-neutral-600">
                        We showcase quick, whole-food dishes that anyone can
                        master—no fancy equipment, no ultra-processed
                        shortcuts—just honest ingredients and straightforward
                        steps.
                    </p>
                </div>
            </div>
            <div className="relative">
                <picture>
                    <source
                        srcSet="/images/image-about-our-mission-large.webp"
                        media="(min-width:1024px)"
                    />
                    <img
                        src="/images/image-about-our-mission-small.webp"
                        alt="image hero section"
                        className="w-full h-auto rounded-20"
                        loading="lazy"
                    />
                </picture>
                <img
                    src={PatternIllustration}
                    alt="pattern illustration"
                    className="max-xl:hidden absolute -right-20 bottom-1/5"
                />
            </div>
        </section>
    );
}

export default Mission;
