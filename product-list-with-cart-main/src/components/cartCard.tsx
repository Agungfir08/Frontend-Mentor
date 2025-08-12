import { useContext } from 'react';
import EmptyCartIllustration from '../assets/images/illustration-empty-cart.svg';
import { cartContext } from '../context/cartContext';
import { DeleteButton } from './button';
import { RegularButton } from './button';
import CarbonIcon from '../assets/images/icon-carbon-neutral.svg';

export default function CartCard() {
    const { cart, removeFromCart, toggleModal, totalPrice } =
        useContext(cartContext);
    return (
        <div
            aria-label="shopping cart"
            className="bg-white rounded-lg p-6 space-y-6">
            <h2 className="text-2xl text-red font-bold">
                Your Cart ({cart.length})
            </h2>
            {cart.length === 0 ? (
                <>
                    <img
                        src={EmptyCartIllustration}
                        alt="empty cart"
                        className="mx-auto"
                    />
                    <p className=" font-semibold text-sm text-rose-500 text-center">
                        Your added items will appear here
                    </p>
                </>
            ) : (
                <div className="space-y-6">
                    <ul className=" *:border-b *:border-rose-200 *:py-3.5 *:first:pt-0">
                        {cart.map((item) => (
                            <li
                                key={item.name}
                                className="flex justify-between items-center gap-3">
                                <div className="space-y-1.5">
                                    <h3 className=" text-rose-900 font-bold text-sm">
                                        {item.name}
                                    </h3>
                                    <div className="space-x-2.5  text-xs">
                                        <span className="text-red font-semibold">
                                            {item.quantity}x
                                        </span>
                                        <span className="text-rose-500">
                                            @ {item.price.toFixed(2)}
                                        </span>
                                        <span className="font-semibold text-rose-500">
                                            $
                                            {(
                                                item.quantity * item.price
                                            ).toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <DeleteButton
                                        productName={item.name}
                                        onDelete={() =>
                                            removeFromCart(item.name)
                                        }
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-between items-center text-rose-900">
                        <span className="text-sm">Order Total</span>
                        <span
                            aria-label={`Total price is $${totalPrice.toFixed(
                                2
                            )}`}
                            className="text-2xl font-bold">
                            ${totalPrice.toFixed(2)}
                        </span>
                    </div>
                    <div className="flex items-center justify-center gap-3  text-sm bg-rose-50 rounded-lg py-3.5 px-2.5">
                        <img
                            src={CarbonIcon}
                            alt="carbon neutral icon"
                            aria-hidden="true"
                        />
                        <span className="text-rose-500">
                            This is a{' '}
                            <span className="text-rose-900 font-semibold">
                                carbon-neutral
                            </span>{' '}
                            delivery
                        </span>
                    </div>
                    <div>
                        <RegularButton
                            text="Confirm Order"
                            onClick={toggleModal}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
