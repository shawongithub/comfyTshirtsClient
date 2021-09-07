import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../App';
const Cart = () => {
    const [cart] = useContext(CartContext)
    console.log(cart)
    return (
        <div>
            <h1>This is cart component</h1>
        </div>
    );
};

export default Cart;