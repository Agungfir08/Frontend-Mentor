import Button from './Button';

interface ExtensionCardProps {
    image: string;
    name: string;
    description: string;
}
function ExtensionCard({ image, name, description }: ExtensionCardProps) {
    return (
        <article className="flex flex-col items-start justify-between bg-neutral-0 dark:bg-neutral-800 p-5 rounded-2xl border border-neutral-600 h-[200px]">
            <div className="flex items-start gap-4">
                <img src={image} alt={name} className="size-[60px]" />
                <div className="flex flex-col gap-1.5">
                    <h2 className="font-bold text-xl text-neutral-900 dark:text-neutral-100 ">
                        {name}
                    </h2>
                    <p className="dark:text-neutral-300 font-medium tracking-tighter ">
                        {description}
                    </p>
                </div>
            </div>
            <Button variant="destructive">Remove</Button>
        </article>
    );
}

export default ExtensionCard;
