export function WeatherInfoSkeleton() {
    return (
        <div className="relative h-[286px] w-full flex flex-col gap-3.5 items-center justify-center rounded-[20px] bg-neutral-800">
            <div className="flex items-center gap-2">
                <div className="size-3 bg-neutral-200 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="size-3 bg-neutral-200 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="size-3 bg-neutral-200 rounded-full animate-bounce"></div>
            </div>
            <p className="body-lg text-neutral-200">Loading...</p>
        </div>
    );
}
