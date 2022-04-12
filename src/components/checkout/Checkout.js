import React from 'react';
import PropTypes from 'prop-types';
import CheckoutItem from './CheckoutItem';

export default function Checkout({ cart, setCart }) {
  function setQuantity(qty, itemID) {
    const cartCopy = cart.map((cartItem) => Object.assign({}, cartItem));
    const targetCartItem = cartCopy.find((cartItem) => cartItem.id === itemID);
    targetCartItem.quantity = qty;
    setCart(cartCopy);
  }
  return (
    <div className="w-[480px] mx-auto my-12">
      <div>My Cart</div>
      <ul>
        {cart.map((item) => (
          <CheckoutItem key={item.id} item={item} setQuantity={setQuantity} />
        ))}
      </ul>
    </div>
  );
}
Checkout.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func
};
