import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { categoryRouteMapping, getItemByID } from '../../data/data';
import ItemOption from './ItemOption';
import uniqid from 'uniqid';

export default function ItemPage({ setSection, cart, setCart }) {
  const params = useParams();
  const item = getItemByID(params.id);
  const [quantity, setQuantity] = useState(1);
  const [options, setOptions] = useState(
    item.options.map((option) => ({
      [Object.keys(option)[0]]: Object.values(option)[0][0]
    }))
  );

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
    const cartObj = {
      item: item,
      quantity: quantity,
      options: options,
      id: uniqid()
    };
    setCart([...cart, cartObj]);
  }

  return (
    <div className="m-auto w-fit mt-10">
      <div className="text-4xl">{item.name}</div>
      <div className="flex">
        <img className="m-4" src={item.image} />
        <div className="flex flex-col justify-around flex-1 max-w-sm text-xl m-4">
          <div>{item.description}</div>
          <div className="space-y-4 text-lg">
            <div>
              Unit Price: <span className="font-light">${item.price}</span>
            </div>
            <ItemOption
              options={item.options}
              optionsState={options}
              setOptions={setOptions}
            />
            <div>
              <div>
                Quantity: <span className="font-light">{quantity}</span>
              </div>
              <div>
                <button
                  className="border-2 bg-slate-200 w-6 hover:bg-slate-300"
                  onClick={decreaseQuantity}>
                  -
                </button>
                <input
                  className="border-2 w-20 text-center font-light"
                  type="number"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, Number(e.target.value)))
                  }></input>
                <button
                  className="border-2 bg-slate-200 w-6 hover:bg-slate-300"
                  onClick={increaseQuantity}>
                  +
                </button>
              </div>
            </div>
          </div>
          <button
            className="block px-3 py-2 mt-3 bg-lime-200 hover:bg-lime-300"
            onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
ItemPage.propTypes = {
  setSection: PropTypes.func,
  cart: PropTypes.array,
  setCart: PropTypes.func
};
