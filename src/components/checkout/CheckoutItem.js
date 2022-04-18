import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { categoryRouteMapping } from '../../data/data';

export default function CheckoutItem({ item, setQuantity, deleteItem }) {
  const itemData = item.item;
  const itemQty = item.quantity;
  const itemOptions = item.options;
  const itemID = item.id;
  const path = categoryRouteMapping.get(itemData.category);
  // const arrayMoneyOptions = Object.values(itemOptions).filter((optionValue) =>
  //   optionValue.startsWith('$')
  // );
  // console.log(arrayMoneyOptions);
  const itemCost = (
    itemOptions
      .map((item) => Object.values(item)[0])
      .filter((optionValue) => optionValue.includes('$'))
      .flatMap((option) => option.match(/\$\d+\.?\d+/gm))
      .map((string) => Number(string.slice(1)))
      .reduce((prev, curr) => prev + curr, itemData.price) * itemQty
  ).toFixed(2);

  function increaseQuantity() {
    setQuantity(itemQty + 1, itemID);
  }
  function decreaseQuantity() {
    setQuantity(Math.max(itemQty - 1, 1), itemID);
  }
  return (
    <li className="w-full px-8 py-4 flex bg-slate-200">
      <div className="w-[60px] bg-white flex">
        <Link to={`/store/${path}/${itemData.id}`}>
          <img
            className="max-w-full h-auto p-2 m-auto"
            src={itemData.image}
            alt={itemData.name}
          />
        </Link>
      </div>
      <div className="flex-1 ml-6 flex flex-col">
        <Link to={`/store/${path}/${itemData.id}`}>
          <div className="text-xl flex justify-between">
            <div>{itemData.name}</div>
            <div className="font-light">${itemCost}</div>
          </div>
        </Link>
        <div className="flex-1 flex text-sm">
          <div className="flex-1 flex flex-col justify-start space-y-2 mt-2">
            {itemOptions.map((option) => (
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
                value={itemQty}
                onChange={(e) =>
                  setQuantity(Math.max(1, Number(e.target.value)), itemID)
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
