import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function CheckoutItem({ item, setQuantity, deleteItem }) {
  const itemData = item.item;
  const itemQty = item.quantity;
  const itemOptions = item.options;
  const itemID = item.id;

  function increaseQuantity() {
    setQuantity(itemQty + 1, itemID);
  }
  function decreaseQuantity() {
    setQuantity(itemQty - 1, itemID);
  }
  return (
    <li className="w-full px-8 py-4 flex bg-slate-200">
      <img className="w-10" src={itemData.image} />
      <div className="flex-1 ml-6 flex flex-col">
        <div className="text-xl">{itemData.name}</div>
        <div className="flex-1 flex text-sm">
          <div className="flex-1 flex flex-col justify-around">
            {itemOptions.map((option) => (
              <div key={Object.keys(option)[0]} className="">
                {Object.keys(option)[0]}:{' '}
                <span className="font-light">{Object.values(option)[0]}</span>
              </div>
            ))}
          </div>

          <div className="flex-1 flex flex-col justify-around">
            <div>
              <span>Quantity: </span>
              <input
                className="border-2 text-center font-light w-8"
                value={itemQty}
                onChange={(event) =>
                  setQuantity(Number(event.target.value), itemID)
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
              onClick={() => deleteItem(itemID)}>
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
  item: PropTypes.object.isRequired,
  setQuantity: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired
};
