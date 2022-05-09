import React from 'react';
import PropTypes from 'prop-types';

export default function ItemQuantity({ cartItemObj, setCartItemObj }) {
  function increaseQuantity() {
    setCartItemObj({
      ...cartItemObj,
      quantity: Math.min(cartItemObj.quantity + 1, 100)
    });
  }

  function decreaseQuantity() {
    setCartItemObj({
      ...cartItemObj,
      quantity: Math.max(cartItemObj.quantity - 1, 1)
    });
  }

  function qtyInputChangeHandler(event) {
    const input = event.target;
    input.setCustomValidity('');

    if (input.checkValidity()) {
      setCartItemObj({
        ...cartItemObj,
        quantity: Number(input.value)
      });
    } else {
      input.setCustomValidity('Quantity must be between 1 and 100');
      input.reportValidity();
    }
  }

  return (
    <div>
      <div>
        Quantity: <span className="font-light">{cartItemObj.quantity}</span>
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
          min="1"
          max="100"
          value={cartItemObj.quantity}
          onChange={qtyInputChangeHandler}
        />
        <button
          className="border-2 bg-slate-200 w-6 hover:bg-slate-300"
          onClick={increaseQuantity}>
          +
        </button>
      </div>
    </div>
  );
}
ItemQuantity.propTypes = {
  cartItemObj: PropTypes.object.isRequired,
  setCartItemObj: PropTypes.func.isRequired
};
