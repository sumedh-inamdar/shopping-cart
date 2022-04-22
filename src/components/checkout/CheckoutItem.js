import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { categoryRouteMapping } from '../../data/data';

export default function CheckoutItem({ cartItem, setQuantity, deleteItem }) {
  const item = cartItem.item;
  const cartItemQty = cartItem.quantity;
  const cartItemOptions = cartItem.options;
  const cartItemID = cartItem.id;
  const cartItemCost = cartItem.unitPrice * cartItemQty;
  const path = categoryRouteMapping.get(item.category);
  // const arrayMoneyOptions = Object.values(itemOptions).filter((optionValue) =>
  //   optionValue.startsWith('$')
  // );
  // console.log(arrayMoneyOptions);

  function increaseQuantity() {
    setQuantity(cartItemQty + 1, cartItemID);
  }
  function decreaseQuantity() {
    setQuantity(Math.max(cartItemQty - 1, 1), cartItemID);
  }
  return (
    <li className="w-full px-8 py-4 flex bg-slate-200">
      <div className="w-[60px] bg-white flex">
        <Link to={`/store/${path}/${item.id}`}>
          <img
            className="max-w-full h-auto p-2 m-auto"
            src={item.image}
            alt={item.name}
          />
        </Link>
      </div>
      <div className="flex-1 ml-6 flex flex-col">
        <div className="text-xl flex justify-between">
          <Link to={`/store/${path}/${item.id}`}>
            <div>{item.name}</div>
          </Link>
          <div className="font-light">${cartItemCost.toFixed(2)}</div>
        </div>
        <div className="flex-1 flex text-sm">
          <div className="flex-1 flex flex-col justify-start space-y-2 mt-2">
            {cartItemOptions.map((option) => (
              <div key={Object.keys(option)[0]} className="">
                {Object.keys(option)[0]}:{' '}
                <span className="font-light">{Object.values(option)[0]}</span>
              </div>
            ))}
          </div>

          <div className="flex-1 flex flex-col justify-start space-y-2 mt-2 ml-2">
            <div>
              <span>Quantity: </span>
              <input
                className="border-2 text-center font-light w-8"
                value={cartItemQty}
                onChange={(e) =>
                  setQuantity(Math.max(1, Number(e.target.value)), cartItemID)
                }
                type="number"></input>
              <div className="inline divide-x-2 divide-slate-400">
                <button
                  className="ml-2 bg-slate-300 w-6 hover:bg-slate-400"
                  onClick={increaseQuantity}>
                  +
                </button>
                <button
                  className="bg-slate-300 w-6 hover:bg-slate-400"
                  onClick={decreaseQuantity}>
                  -
                </button>
              </div>
            </div>
            <button
              className="w-fit space-x-2 px-2 hover:bg-slate-300"
              onClick={() => deleteItem(cartItemID)}>
              <FontAwesomeIcon icon={faTrash} />
              <span>Remove Item</span>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
CheckoutItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
  setQuantity: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired
};
