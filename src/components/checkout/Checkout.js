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
  function deleteItem(itemID) {
    setCart(cart.filter((item) => item.id !== itemID));
  }
  const quantity = cart.reduce(
    (previousValue, currentValue) => previousValue + currentValue.quantity,
    0
  );
  return (
    <div className="w-[480px] mx-auto my-12">
      <div className="text-2xl text-center mb-2">
        My Cart ({quantity} items)
      </div>
      <ul className="space-y-4">
        {cart.map((item) => (
          <CheckoutItem
            key={item.id}
            item={item}
            setQuantity={setQuantity}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
    </div>
  );
}
Checkout.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func
};
