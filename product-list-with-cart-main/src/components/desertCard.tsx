import { AddToCartButton, QuantityButton } from './button';
import { cartContext } from '../context/cartContext';
import { useContext } from 'react';

interface DesertCardProps {
    name: string;
    category: string;
    price: number;
    image: {
        desktop: string;
        tablet: string;
        mobile: string;
        thumbnail: string;
    };
}

export default function DesertCard({
    name,
    category,
    price,
    image,
}: DesertCardProps) {
    const { cart, addToCart, increaseQuantity, decreaseQuantity } =
        useContext(cartContext);

    const itemOnCart = cart.find((item) => item.name === name);
    return (
        <article
            className="flex flex-col gap-8"
            aria-labelledby={`desert-${name
                .replace(/\s+/g, '-')
                .toLowerCase()}`}>
            <div className="relative w-fit">
                <picture>
                    <source
                        media="(min-width: 1024px)"
                        srcSet={image.desktop}
                    />
                    <source media="(min-width: 768px)" srcSet={image.tablet} />
                    <img
                        src={image.mobile}
                        alt={`${name} image`}
                        className={`w-full h-auto rounded-lg ${
                            itemOnCart && 'outline-2 outline-red'
                        }`}
                    />
                </picture>
                <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 w-max">
                    {itemOnCart ? (
                        <QuantityButton
                            count={itemOnCart.quantity}
                            onIncrease={() => increaseQuantity(name)}
                            onDecrease={() => decreaseQuantity(name)}
                        />
                    ) : (
                        <AddToCartButton
                            productName={name}
                            onCart={() => addToCart(name, price, image)}
                        />
                    )}
                </div>
            </div>
            <div className="font-red-hat flex flex-col gap-1 ">
                <span className="text-md tracking-tight text-rose-400">
                    {category}
                </span>
                <p
                    id={`desert-${name.replace(/\s+/g, '-').toLowerCase()}`}
                    className="text-base font-semibold text-rose-900">
                    {name}
                </p>
                <span className="text-base font-semibold text-red">
                    ${price.toFixed(2)}
                </span>
            </div>
        </article>
    );
}
