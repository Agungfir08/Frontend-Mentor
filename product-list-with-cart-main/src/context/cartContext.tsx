import { createContext, useState } from 'react';

interface Cart {
    name: string;
    quantity: number;
    price: number
}

const cartContext = createContext();

export function cartProvider() {
    const [cart, setCart] = useState<Cart[]>([])

    function addToCart({name, quantity, price}: Cart) {
        setCart(...cart, {
            name,
            quantity,
            price
        } )
    }

    function increaseQuantity({name}: {name: string}) {
        setCart((prev) => prev.map((item) => (
            if(item.name === name) {
                {...item, quantity: item.quantity + 1}
            }
        )))
    }

    function decreaseQuantity({name}: {name: string}) {
        setCart((prev) => prev.map((item) => (
            if(item.name === name) {
                if(item.quantity > 1) {
                    {...item, quantity: item.quantity - 1}
                }
            }
        )))
    }
}

export default cartContext