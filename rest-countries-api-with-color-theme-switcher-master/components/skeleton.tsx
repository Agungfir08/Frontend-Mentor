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
