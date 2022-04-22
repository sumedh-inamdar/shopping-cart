import React from 'react';
import PropTypes from 'prop-types';
import CheckoutItem from './CheckoutItem';
import { setCartItemQuantity } from '../../utils/helperFunc';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faApplePay,
  faBtc,
  faCcAmex,
  faCcMastercard,
  faCcVisa
} from '@fortawesome/free-brands-svg-icons';

function calcCartTotal(cart) {
  return cart
    .map((cartItem) => cartItem.unitPrice * cartItem.quantity)
    .reduce((prev, curr) => prev + curr);
}
export default function Checkout({ cart, setCart }) {
  const quantity = cart.reduce(
    (previousValue, currentValue) => previousValue + currentValue.quantity,
    0
  );
  const subTotal = cart.length > 0 ? calcCartTotal(cart) : 0;
  const salesTax = subTotal * 0.05;
  const orderTotal = subTotal + salesTax;

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
        <div className="w-full px-8 py-4 bg-slate-200">
          <div className="my-2 font-bold">Total</div>
          <div className="flex justify-between">
            <span>Sub-total</span>
            <span>${subTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Sales Tax (5%)</span>
            <span>${salesTax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>FREE</span>
          </div>
          <hr className="border-1 border-black my-2" />
          <div className="flex justify-between font-bold my-2 text-lg">
            <span>Order Total</span>
            <span>${orderTotal.toFixed(2)}</span>
          </div>
          <button className="w-full py-2 bg-blue-200 hover:bg-blue-300 text-white">
            Checkout
          </button>
          <div className="mt-4 text-center font-medium text-lg">We accept</div>
          <div className="flex justify-between items-center mt-2">
            <FontAwesomeIcon className="text-4xl" icon={faApplePay} />
            <FontAwesomeIcon className="text-4xl" icon={faCcVisa} />
            <FontAwesomeIcon className="text-4xl" icon={faCcMastercard} />
            <FontAwesomeIcon className="text-4xl" icon={faCcAmex} />
            <FontAwesomeIcon className="text-4xl" icon={faBtc} />
          </div>
        </div>
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
