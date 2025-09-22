function BeyondThePlate() {
    return (
        <div className="grid xl:grid-cols-[1fr_2fr] gap-10 xl:gap-16 py-12 md:py-20 xl:py-24">
            <div className="space-y-5">
                <h2 className="heading-2 text-neutral-900">Beyond the plate</h2>
                <div className="space-y-3">
                    <p className="text-body--xl--sans text-neutral-600">
                        We believe food is a catalyst for community and
                        well-being. By sharing approachable recipes, we hope to:
                    </p>
                    <ol className="list-disc pl-7">
                        <li className="text-body--xl--sans text-neutral-600">
                            Encourage family dinners and social cooking.
                        </li>
                        <li className="text-body--xl--sans text-neutral-600">
                            Reduce reliance on single-use packaging and delivery
                            waste.
                        </li>
                        <li className="text-body--xl--sans text-neutral-600">
                            Spark curiosity about seasonal produce and local
                            agriculture.
                        </li>
                    </ol>
                </div>
            </div>
            <picture>
                <source
                    srcSet="/images/image-about-beyond-the-plate-large.webp"
                    media="(min-width:1024px)"
                />
                <img
                    src="/images/image-about-beyond-the-plate-small.webp"
                    alt="image hero section"
                    className="w-full h-auto rounded-20"
                    loading="lazy"
                />
            </picture>
        </div>
    );
}

export default BeyondThePlate;
