import React from 'react';
import PropTypes from 'prop-types';

export default function CheckoutItem({ item, setQuantity }) {
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
    <li className="w-full px-8 py-4 flex">
      <img className="h-20 m-auto" src={itemData.image} />
      <div className="text-lg">{itemData.name}</div>
      <div className="flex">
        <div>
          {itemOptions.map((option) => (
            <div key={Object.keys(option)[0]} className="text-base">
              {Object.keys(option)[0]} :{Object.values(option)[0]}
            </div>
          ))}
        </div>

        <div>
          <div>Quantity: {itemQty}</div>
          <div>
            <button
              className="border-2 bg-slate-200 w-6 hover:bg-slate-300"
              onClick={decreaseQuantity}>
              -
            </button>
            <input
              className="border-2 w-20 text-center font-light"
              type="number"
              value={itemQty}
              onChange={(event) =>
                setQuantity(Number(event.target.value), itemID)
              }></input>
            <button
              className="border-2 bg-slate-200 w-6 hover:bg-slate-300"
              onClick={increaseQuantity}>
              +
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
CheckoutItem.propTypes = {
  item: PropTypes.object.isRequired,
  setQuantity: PropTypes.func.isRequired
};
