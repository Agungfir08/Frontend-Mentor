import { FlagOff } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="flex min-h-[calc(100vh-331px)] md:min-h-[calc(100vh-296px)] lg:min-h-[calc(100vh-204px)] justify-center">
            <div className="flex gap-5 items-center justify-center">
                <FlagOff className="size-10 lg:size-16 text-grey-950 dark:text-white shrink-0" />
                <h1 className="text-lg md:text-2xl lg:text-3xl font-extrabold text-grey-950 dark:text-white">
                    The country you are looking for was not found
                </h1>
            </div>
        </div>
    );
}
