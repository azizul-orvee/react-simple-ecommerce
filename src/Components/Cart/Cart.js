import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    const totalPrice = cart.reduce((total, price) => total+ price.price,0);
    let shipping = 0;
    if(totalPrice > 35){
        shipping = 0;
    }
    else if(totalPrice > 15){
        shipping = 4.99;
    }else if(totalPrice > 0){
        shipping = 12.99
    }

    const tax =  totalPrice * .1

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    const grandTotal = totalPrice + shipping + tax 

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length} </p>
            <p>Shipping Price: {formatNumber(shipping)}</p>
            <p>Product Price: {formatNumber(totalPrice)}</p>
            <p>Tax: {formatNumber(tax)}</p>
            <p>Total Price: {formatNumber(grandTotal)}</p>
        </div>
    );
};

export default Cart;