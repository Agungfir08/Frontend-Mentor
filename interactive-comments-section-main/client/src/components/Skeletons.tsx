export function CommentSkeleton() {
    return (
        <div className="bg-white w-full flex flex-col-reverse lg:flex-row  gap-6 p-4 lg:p-6 rounded-xl animate-pulse">
            {/* Skeleton untuk ButtonUpvote */}
            <div className="flex lg:flex-col items-center gap-2">
                <div className="w-8 h-8 bg-gray-200 rounded" />
                <div className="w-6 h-4 bg-gray-200 rounded" />
                <div className="w-8 h-8 bg-gray-200 rounded" />
            </div>

            <div className="space-y-4 flex-1">
                {/* Header user info */}
                <div className="flex items-center gap-4">
                    <div className="size-8 bg-gray-200 rounded-full" />
                    <div className="flex items-center gap-2">
                        <div className="w-24 h-4 bg-gray-200 rounded" />
                    </div>
                    <div className="w-16 h-4 bg-gray-200 rounded ml-auto" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                    <div className="w-full h-4 bg-gray-200 rounded" />
                    <div className="w-3/4 h-4 bg-gray-200 rounded" />
                </div>
            </div>
        </div>
    );
}
