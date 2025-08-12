import cartIcon from '../assets/images/icon-add-to-cart.svg';

interface RegularButtonProps {
    text: String;
    onClick: () => void;
}

export function RegularButton({ text, onClick }: RegularButtonProps) {
    return (
        <button
            type="button"
            className="w-full rounded-full py-2.5 bg-red  font-semibold text-base text-white lg:hover:bg-red-50 cursor-pointer transition-colors ease-in-out duration-300"
            onClick={onClick}>
            {text}
        </button>
    );
}

export function AddToCartButton({
    onCart,
    productName,
}: {
    onCart: () => void;
    productName: string;
}) {
    return (
        <button
            type="button"
            className="flex items-center gap-[0.4375rem] py-3 px-7 border border-rose-400 rounded-full bg-white  font-semibold text-rose-900 text-md tracking-tight cursor-pointer"
            onClick={onCart}
            aria-label={`Add the ${productName
                .replace(/\s+/g, '-')
                .toLowerCase()} to cart`}>
            <span aria-hidden="true">
                <img src={cartIcon} alt="Cart Icon" />
            </span>
            Add to Cart
        </button>
    );
}

interface QuantityButtonProps {
    count: number;
    onIncrease: () => void;
    onDecrease: () => void;
}

export function QuantityButton({
    count,
    onIncrease,
    onDecrease,
}: QuantityButtonProps) {
    return (
        <div
            role="group"
            aria-labelledby="quantity-label"
            className="flex items-center justify-between py-3 px-3.5 w-40 rounded-full bg-red  font-semibold text-white">
            <span id="quantity-label" className="sr-only">
                Quantity
            </span>
            <button
                onClick={onDecrease}
                className="group border border-white px-1 py-2 rounded-full cursor-pointer md:hover:bg-white transition-colors ease-in-out duration-300">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" w-2.5 h-0.5"
                    viewBox="0 0 10 2"
                    aria-hidden="true">
                    <path
                        className="fill-white group-hover:fill-red transition-colors ease-in-out duration-300"
                        d="M0 .375h10v1.25H0V.375Z"
                    />
                </svg>
            </button>
            <span role="spinbutton" aria-valuenow={count} aria-valuemin={1}>
                {count}
            </span>
            <button
                onClick={onIncrease}
                className="group border border-white p-1 rounded-full cursor-pointer md:hover:bg-white transition-colors ease-in-out duration-300">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" w-2.5 h-2.5"
                    viewBox="0 0 10 10"
                    aria-hidden="true">
                    <path
                        className="fill-white group-hover:fill-red transition-colors ease-in-out duration-300"
                        d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                    />
                </svg>
            </button>
        </div>
    );
}

export function DeleteButton({
    onDelete,
    productName,
}: {
    onDelete: () => void;
    productName: string;
}) {
    return (
        <button
            type="button"
            className="group border-2 border-rose-400 p-1 rounded-full md:hover:border-rose-900 cursor-pointer transition-colors ease-in-out duration-300"
            onClick={onDelete}
            aria-label={`Remove ${productName
                .replace(/\s+/g, '-')
                .toLowerCase()} from cart`}>
            <span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="none"
                    viewBox="0 0 10 10"
                    aria-hidden="true">
                    <path
                        className="fill-rose-400 group-hover:fill-rose-900 transition-colors ease-in-out duration-300"
                        d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
                    />
                </svg>
            </span>
        </button>
    );
}
