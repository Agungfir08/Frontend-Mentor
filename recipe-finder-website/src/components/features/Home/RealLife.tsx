function RealLife() {
    return (
        <section className="grid xl:grid-cols-[1fr_1.25fr] gap-8 md:gap-10 lg:gap-12 lg:items-center">
            <div className="space-y-5">
                <h2 className="heading-2 text-neutral-900">
                    Build for real life
                </h2>
                <p className="text-body--xl--sans text-neutral-600">
                    Cooking shouldn’t be complicated. These recipes come in
                    under{' '}
                    <span className="relative before:absolute before:-left-0.5 before:-right-0.5 before:bottom-0 before:h-3 before:bg-orange-500 before:-z-[1] before:rounded-4">
                        30 minutes
                    </span>{' '}
                    of active time, fit busy schedules, and taste good enough to
                    repeat.
                </p>
                <p className="text-body--xl--sans text-neutral-600">
                    Whether you’re new to the kitchen or just need fresh ideas,
                    we’ve got you covered.
                </p>
            </div>
            <picture>
                <source
                    srcSet="/images/image-home-real-life-large.webp"
                    media="(min-width:1024px)"
                />
                <img
                    src="/images/image-home-real-life-small.webp"
                    alt="image hero section"
                    className="w-full h-auto rounded-12"
                    loading="lazy"
                />
            </picture>
        </section>
    );
}

export default RealLife;
