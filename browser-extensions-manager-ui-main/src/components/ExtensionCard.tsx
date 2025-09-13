import useExtensionContext from '../hook/useExtensionContext';
import Button from './Button';
import SwitchButton from './SwitchButton';

interface ExtensionCardProps {
    image: string;
    name: string;
    description: string;
    active: boolean;
}
function ExtensionCard({
    image,
    name,
    description,
    active,
}: ExtensionCardProps) {
    const { changeActiveExtension, removeExtension } = useExtensionContext();

    return (
        <article className="flex flex-col justify-between bg-neutral-0 dark:bg-neutral-800 p-5 rounded-2xl border border-neutral-600 h-[200px]">
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
            <div className="flex items-center justify-between ">
                <Button
                    variant="destructive"
                    onClick={() => removeExtension(name)}>
                    Remove
                </Button>
                <SwitchButton
                    id={name.replace(/\s+/g, '-').toLowerCase()}
                    checked={active}
                    onCheckedChange={() => changeActiveExtension(name)}
                />
            </div>
        </article>
    );
}

export default ExtensionCard;
