import { createContext, useState, type ReactNode } from 'react';

interface Cart {
    name: string;
    quantity: number;
    price: number;
    image: {
        desktop: string;
        tablet: string;
        mobile: string;
        thumbnail: string;
    };
}

type CartContextType = {
    cart: Cart[];
    isModalOpen: boolean;
    toggleModal: () => void;
    addToCart: (name: string, price: number, image: Cart['image']) => void;
    removeFromCart: (name: string) => void;
    increaseQuantity: (name: string) => void;
    decreaseQuantity: (name: string) => void;
    clearCart: () => void;
    totalPrice: number;
};

export const cartContext = createContext<CartContextType>({
    cart: [],
    isModalOpen: false,
    toggleModal: () => {},
    addToCart: () => {},
    removeFromCart: () => {},
    increaseQuantity: () => {},
    decreaseQuantity: () => {},
    clearCart: () => {},
    totalPrice: 0,
});

export default function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<Cart[]>([]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    function toggleModal() {
        setIsModalOpen((prev) => !prev);
    }

    function addToCart(name: string, price: number, image: Cart['image']) {
        setCart((prev) => [
            ...prev,
            {
                name,
                quantity: 1,
                image,
                price,
            },
        ]);
    }

    function increaseQuantity(name: string) {
        setCart((prev) =>
            prev.map((item) => {
                if (item.name === name) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            })
        );
    }

    function decreaseQuantity(name: string) {
        setCart((prev) =>
            prev.map((item) => {
                if (item.name === name) {
                    if (item.quantity > 1) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        removeFromCart(name);
                    }
                }
                return item;
            })
        );
    }

    function removeFromCart(name: string) {
        setCart((prev) => prev.filter((item) => item.name !== name));
    }

    function clearCart() {
        setCart([]);
        setIsModalOpen(false);
    }

    const totalPrice = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const value = {
        cart,
        isModalOpen,
        toggleModal,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalPrice,
    };

    return (
        <cartContext.Provider value={value}>{children}</cartContext.Provider>
    );
}
