export function CardSkeleton() {
    return (
        <article className="bg-white dark:bg-blue-900 shadow-sm rounded-md max-w-[328px] md:max-w-[284px] overflow-hidden animate-pulse">
            {/* Image placeholder */}
            <div className="w-full h-[200px] md:h-[160px] bg-slate-200 dark:bg-slate-700" />

            {/* Content */}
            <div className="p-8 space-y-4">
                {/* Title placeholder */}
                <div className="h-6 w-3/4 bg-slate-200 dark:bg-slate-700 rounded" />

                {/* Info lines */}
                <div className="space-y-3">
                    <div className="h-4 w-1/2 bg-slate-200 dark:bg-slate-700 rounded" />
                    <div className="h-4 w-2/3 bg-slate-200 dark:bg-slate-700 rounded" />
                    <div className="h-4 w-1/3 bg-slate-200 dark:bg-slate-700 rounded" />
                </div>
            </div>
        </article>
    );
}

export function CountryButtonSkeleton() {
    return (
        <div className="bg-slate-200 dark:bg-slate-700 rounded-sm py-3 lg:py-1 w-[192px] lg:w-[96px] h-[40px] lg:h-[32px] animate-pulse" />
    );
}

export function InfoItemSkeleton() {
    return <div className="h-6 w-48 bg-gray-300 dark:bg-gray-700 rounded" />;
}

export function CountryDetailsSkeleton() {
    return (
        <div className="flex flex-col xl:flex-row lg:items-center gap-20 lg:gap-32">
            {/* Image skeleton */}
            <div className="w-full max-w-[640px] mx-auto lg:max-w-[560px] h-[300px] lg:h-[400px] bg-gray-300 dark:bg-gray-700 rounded-md" />

            {/* Right section */}
            <div className="w-full space-y-12 lg:space-y-7">
                {/* Title skeleton */}
                <div className="h-10 w-2/3 bg-gray-300 dark:bg-gray-700 rounded-md" />

                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-20 lg:gap-10">
                    <div className="space-y-7 lg:space-y-2.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <InfoItemSkeleton key={i} />
                        ))}
                    </div>
                    <div className="space-y-7 lg:space-y-2.5">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <InfoItemSkeleton key={i} />
                        ))}
                    </div>
                </div>

                {/* Border Countries */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-3.5 mt-20">
                    <div className="h-6 w-48 bg-gray-300 dark:bg-gray-700 rounded" />
                    <div className="flex flex-wrap gap-5 lg:gap-2.5 grow">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <CountryButtonSkeleton key={i} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
