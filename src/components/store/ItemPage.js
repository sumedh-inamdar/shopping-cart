import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { categoryRouteMapping, getItemByID } from '../../data/data';

export default function ItemPage({ setSection, setCartQty }) {
  const params = useParams();
  const item = getItemByID(params.id);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    setSection(categoryRouteMapping.get(item.category));
  });
  function increaseQuantity() {
    setQuantity(quantity + 1);
  }
  function decreaseQuantity() {
    setQuantity(Math.max(quantity - 1, 1));
  }
  function addToCart() {
    setCartQty(quantity);
  }
  return (
    <div className="m-auto w-fit mt-10">
      <div className="text-4xl">{item.name}</div>
      <div className="flex">
        <img src={item.image} />
        <div className="flex flex-col justify-around flex-1 max-w-sm text-xl m-8">
          <div>{item.description}</div>
          <div>${item.price}</div>
          <div className="">
            <div>Quantity: {quantity}</div>
            <button
              className="border-2 bg-slate-200 w-6 hover:bg-slate-300"
              onClick={decreaseQuantity}>
              -
            </button>
            <input
              className="border-2 w-20 text-center"
              type="number"
              value={quantity}
              onChange={() => setQuantity(Number(event.target.value))}></input>
            <button
              className="border-2 bg-slate-200 w-6 hover:bg-slate-300"
              onClick={increaseQuantity}>
              +
            </button>

            <button
              className="block px-3 py-2 mt-3 bg-lime-200 hover:bg-lime-300"
              onClick={addToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
ItemPage.propTypes = {
  item: PropTypes.object,
  setSection: PropTypes.func,
  setCartQty: PropTypes.func
};
