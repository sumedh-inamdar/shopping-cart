import React, { useContext } from 'react';
import CheckoutItem from './CheckoutItem';
import { CartContext, SetCartContext } from '../../App';
import { setCartItemQuantity, calcCartTotal } from '../../utils/helperFunc';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faApplePay,
  faBtc,
  faCcAmex,
  faCcMastercard,
  faCcVisa
} from '@fortawesome/free-brands-svg-icons';

export default function CheckoutList() {
  const cart = useContext(CartContext);
  const setCart = useContext(SetCartContext);
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
