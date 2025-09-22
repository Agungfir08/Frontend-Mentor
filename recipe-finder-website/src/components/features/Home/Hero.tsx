import { Button } from '../../button';

function Hero() {
    return (
        <section className="space-y-10 lg:space-y-20">
            <div className="flex flex-col items-start lg:items-center gap-10">
                <div className="flex flex-col gap-4 items-start lg:items-center">
                    <h1 className="heading text-neutral-900 text-center">
                        <span className="relative before:absolute before:-left-0.5 before:-right-2 before:bottom-2.5 before:bg-orange-500/40 before:-z-[1] before:rounded-4 before:h-10">
                            Healthy
                        </span>{' '}
                        meals, zero fuss
                    </h1>
                    <p className="text-body--xl--sans text-neutral-600 lg:max-w-[580px] lg:text-center">
                        Discover eight quick, whole-food recipes that you can
                        cook tonight—no processed junk, no guesswork.
                    </p>
                </div>
                <Button>Start Exploring</Button>
            </div>
            <div className="bg-neutral-0 p-3 rounded-24">
                <picture>
                    <source
                        srcSet="/images/image-home-hero-large.webp"
                        media="(min-width:1024px)"
                    />
                    <img
                        src="/images/image-home-hero-small.webp"
                        alt="image hero section"
                        className="w-full h-auto rounded-12"
                        loading="lazy"
                    />
                </picture>
            </div>
        </section>
    );
}

export default Hero;
