import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getItemByID } from '../../data/data';

export default function ItemPage() {
  const params = useParams();
  const item = getItemByID(params.id);
  const [quantity, setQuantity] = useState(1);

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }
  function decreaseQuantity() {
    setQuantity(Math.max(quantity - 1, 1));
  }
  return (
    <div className="">
      <div>{item.name}</div>
      <img src={item.image} />
      <div>{item.description}</div>
      <div>{item.price}</div>
      <div>
        <div>Quantity: </div>
        <div>{quantity}</div>
        <button onClick={increaseQuantity}>+</button>
        <button onClick={decreaseQuantity}>-</button>
      </div>
    </div>
  );
}
ItemPage.propTypes = {
  item: PropTypes.object
};
