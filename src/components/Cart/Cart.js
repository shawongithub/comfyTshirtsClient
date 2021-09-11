import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../App';
import { UserContext } from '../../App';
import './Cart.css'

const Cart = () => {
    const [cart] = useContext(CartContext)
    const [user] = useContext(UserContext)
    let sum = cart.reduce((prev, cur) => prev + parseInt(cur.price) * parseInt(cur.count), 0)
    const placeOrderHandler = () => {
        const orderInfo = {
            userEmail: user.email,
            products: cart,
            totalCost: sum
        }
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(orderInfo)
        })
    }
    return (
        <div className="cart-container">
            <div className="cart-left">
                <div className="checkout-header">
                    <div className="header-name">Name</div>
                    <div className="header-image">Image</div>
                    <div className="header-quantity">Quantity</div>
                    <div className="header-price">Price</div>
                </div>
                {
                    cart.map(cartPd => <div className="checkout-cart" key={cartPd._id}>
                        <div className="cart-name">{cartPd.name}</div>
                        <div className="cart-image"><img src={cartPd.imageURL} alt="" /></div>
                        <div className="cart-quantity">{cartPd.count}</div>
                        <div className="cart-price">{cartPd.price * cartPd.count}</div>
                    </div>)
                }
            </div>
            <div className="cart-right">
                <p>Total Cost : {sum}</p>
                <button onClick={placeOrderHandler}>Place Order</button>
            </div>
        </div>

    );
};

export default Cart;