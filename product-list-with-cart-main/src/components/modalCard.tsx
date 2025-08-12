import CheckIcon from '../assets/images/icon-order-confirmed.svg';
import { RegularButton } from './button';
import { cartContext } from '../context/cartContext';
import { useContext } from 'react';

export default function ModalCard() {
    const { cart, toggleModal, clearCart, totalPrice } =
        useContext(cartContext);
    return (
        <div
            className="z-10 fixed inset-0 flex justify-center items-end md:items-center bg-black/50"
            onClick={toggleModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title">
            <div
                className="bg-white p-6 w-full md:max-w-xl rounded-2xl space-y-5"
                onClick={(e) => e.stopPropagation()}>
                <img src={CheckIcon} alt="confirm icon" aria-hidden="true" />
                <div className="font-red-hat">
                    <h1 id="modal-title" className="text-4.5xl font-bold ">
                        Order Confirmed
                    </h1>
                    <p className="text-rose-400 ">
                        We hope you enjoy your food!
                    </p>
                </div>
                <div
                    aria-label="Order summary"
                    className="bg-rose-100 rounded-lg p-6">
                    <ul className="space-y-3.5 max-h-60 md:max-h-80 overflow-y-auto">
                        {cart.map((item) => (
                            <li
                                key={item.name}
                                className="flex justify-between items-center font-red-hat gap-3 border-b border-rose-400 pb-3">
                                <div className="flex items-center gap-3.5">
                                    <img
                                        src={item.image.thumbnail}
                                        alt={item.name}
                                        className="rounded-lg w-12 h-auto"
                                        aria-hidden="true"
                                    />
                                    <div className="text-sm space-y-0.5">
                                        <h3 className="font-semibold text-rose-900 truncate max-w-[8rem] md:max-w-full">
                                            {item.name}
                                        </h3>
                                        <div
                                            aria-label={`${
                                                item.quantity
                                            } at $${item.price.toFixed(
                                                2
                                            )} each`}
                                            className="space-x-2">
                                            <span className="font-semibold text-red">
                                                {item.quantity}x
                                            </span>
                                            <span className=" text-rose-400">
                                                @ ${item.price.toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <span
                                    aria-label={`item total is $${(
                                        item.quantity * item.price
                                    ).toFixed(2)}`}
                                    className="text-base font-bold text-rose-900">
                                    ${(item.quantity * item.price).toFixed(2)}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-between items-center mt-6">
                        <span className=" text-rose-900">Order Total</span>
                        <span
                            className="text-2xl font-bold text-rose-900"
                            aria-label={`Total price is $${totalPrice.toFixed(
                                2
                            )}`}>
                            ${totalPrice.toFixed(2)}
                        </span>
                    </div>
                </div>
                <RegularButton text="Start New Order" onClick={clearCart} />
            </div>
        </div>
    );
}
