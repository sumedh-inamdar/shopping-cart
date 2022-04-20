import React from 'react';
import PropTypes from 'prop-types';
import CheckoutItem from './CheckoutItem';
import { setCartItemQuantity } from '../../utils/helperFunc';
import { Link } from 'react-router-dom';

export default function Checkout({ cart, setCart }) {
  const quantity = cart.reduce(
    (previousValue, currentValue) => previousValue + currentValue.quantity,
    0
  );
  function deleteItem(cartItemID) {
    setCart(cart.filter((cartItem) => cartItem.id !== cartItemID));
  }
  function CheckoutList() {
    return (
      <ul className="space-y-4">
        <div className="text-2xl text-center mb-2">
          My Cart ({quantity} items)
        </div>
        {cart.map((cartItem) => (
          <CheckoutItem
            key={cartItem.id}
            cartItem={cartItem}
            setQuantity={(qty, cartItemID) =>
              setCartItemQuantity(cart, setCart, qty, cartItemID)
            }
            deleteItem={deleteItem}
          />
        ))}
      </ul>
    );
  }
  function NoItemsBlock() {
    return (
      <div className="flex flex-col items-center text-center bg-slate-200 space-y-7 py-7">
        <div className="">Your cart is empty</div>
        <div>Have a look around our store!</div>
        <Link
          to="/store"
          className="w-1/2 bg-gradient-to-r from-cyan-500 to-blue-500  pt-1 border-2 hover:text-white hover:border-2 hover:border-white transition-all duration-200">
          <button>Shop Now</button>
        </Link>
      </div>
    );
  }
  return (
    <div className="w-[480px] mx-auto my-12">
      {cart.length > 0 ? <CheckoutList /> : <NoItemsBlock />}
    </div>
  );
}
Checkout.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func
};
