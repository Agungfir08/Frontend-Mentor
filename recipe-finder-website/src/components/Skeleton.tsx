import { Skeleton } from './ui/skeleton';

export function RecipeDetailSkeleton() {
    return (
        <section className="space-y-6">
            <Skeleton className="h-7 w-40" />

            <div className="grid lg:grid-cols-2 gap-10 mt-4">
                <Skeleton className="w-full h-[300px] lg:h-[400px] rounded-10" />

                <div className="space-y-5">
                    <Skeleton className="h-14 w-3/4" />

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                        <Skeleton className="h-7 w-28 rounded-full" />
                        <Skeleton className="h-7 w-24 rounded-full" />
                        <Skeleton className="h-7 w-24 rounded-full" />
                    </div>

                    <div className="space-y-4">
                        <Skeleton className="h-8 w-32" />
                        <div className="space-y-2">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <Skeleton key={i} className="h-7 w-3/4" />
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <Skeleton className="h-8 w-32" />
                        <div className="space-y-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Skeleton key={i} className="h-7 w-full" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
