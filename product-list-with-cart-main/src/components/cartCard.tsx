import EmptyCartIllustration from '../assets/images/illustration-empty-cart.svg';

export default function CartCard() {
    return (
        <div className="bg-white rounded-lg p-6 space-y-6">
            <h2 className="text-2xl text-red font-bold">Your Cart</h2>
            <img
                src={EmptyCartIllustration}
                alt="empty cart"
                className="mx-auto"
            />
            <p className="font-red-hat font-semibold text-sm text-rose-500 text-center">
                Your added items will appear here
            </p>
        </div>
    );
}
