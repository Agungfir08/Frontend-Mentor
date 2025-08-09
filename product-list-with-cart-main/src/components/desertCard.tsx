import { AddToCartButton } from './button';

interface DesertCardProps {
    name: string;
    category: string;
    price: number;
    image: string;
}

export default function DesertCard({
    name,
    category,
    price,
    image,
}: DesertCardProps) {
    return (
        <div className="flex flex-col gap-8">
            <div className="relative w-fit">
                <img src={image} alt={`${name} image`} className="rounded-lg" />
                <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 w-max">
                    <AddToCartButton />
                </div>
            </div>
            <div className="font-red-hat flex flex-col gap-1 ">
                <span className="text-md tracking-tight text-rose-400">
                    {category}
                </span>
                <p className="text-base font-semibold text-rose-900">{name}</p>
                <span className="text-base font-semibold text-red">
                    ${price.toFixed(2)}
                </span>
            </div>
        </div>
    );
}
