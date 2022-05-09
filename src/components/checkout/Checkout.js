import React, { useContext } from 'react';
import { CartContext } from '../../App';
import { Link } from 'react-router-dom';
import CheckoutList from './CheckoutList';

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

export default function Checkout() {
  const cart = useContext(CartContext);

  return (
    <div className="md:w-[540px] px-6 mx-auto my-12">
      {cart.length > 0 ? <CheckoutList /> : <NoItemsBlock />}
    </div>
  );
}
