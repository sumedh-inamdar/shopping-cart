import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { categoryRouteMapping } from '../../data/data';
import uniqid from 'uniqid';
import { setCartItemQuantity } from '../../utils/helperFunc';
import { CartContext, SetCartContext } from '../../App';

export default function CheckoutItem({ cartItem }) {
  const item = cartItem.item;
  const cartItemQty = cartItem.quantity;
  const cartItemOptions = cartItem.options;
  const cartItemID = cartItem.id;
  const cartItemCost = cartItem.unitPrice * cartItemQty;
  const path = categoryRouteMapping.get(item.category);
  const cart = useContext(CartContext);
  const setCart = useContext(SetCartContext);

  function increaseQuantity() {
    setCartItemQuantity(
      cart,
      setCart,
      Math.min(cartItemQty + 1, 100),
      cartItemID
    );
  }
  function decreaseQuantity() {
    setCartItemQuantity(
      cart,
      setCart,
      Math.max(cartItemQty - 1, 1),
      cartItemID
    );
  }
  function deleteItem() {
    setCart(cart.filter((cartItem) => cartItem.id !== cartItemID));
  }
  function inputChangeHandler(event) {
    const input = event.target;
    input.setCustomValidity('');

    if (input.checkValidity()) {
      setCartItemQuantity(
        cart,
        setCart,
        Number(event.target.value),
        cartItemID
      );
    } else {
      input.setCustomValidity('Quantity must be between 1 and 100');
      input.reportValidity();
    }
  }
  return (
    <li className="w-full px-8 py-4 flex bg-slate-200">
      <div className="w-[60px] bg-white flex items-center">
        <div className="h-fit">
          <Link to={`/store/${path}/${item.id}`}>
            <img
              className="max-w-full h-auto p-2 m-auto"
              src={item.image}
              alt={item.name}
            />
          </Link>
        </div>
      </div>
      <div className="flex-1 ml-6 flex flex-col">
        <div className="text-xl flex justify-between">
          <Link to={`/store/${path}/${item.id}`}>
            <div>{item.name}</div>
          </Link>
          <div className="font-light" data-testid="cartItemCost">
            ${cartItemCost.toFixed(2)}
          </div>
        </div>
        <div className="flex-1 flex flex-row text-sm">
          <div className="flex-1 flex flex-col justify-start space-y-2 mt-2">
            {cartItemOptions.map((option) => (
              <div key={uniqid()}>
                {Object.keys(option)[0]}:{' '}
                <span className="font-light">{Object.values(option)[0]}</span>
              </div>
            ))}
          </div>

          <div className="flex-1 flex flex-col justify-start space-y-2 mt-2 ml-2">
            <div className="flex flex-col md:flex-row">
              <span>Quantity: </span>
              <div className="flex w-full justify-start items-center h-6 md:h-6 mx-2">
                <input
                  className="border-2 text-center font-light w-8 h-full"
                  value={cartItemQty}
                  min="1"
                  max="100"
                  onChange={inputChangeHandler}
                  type="number"
                />
                <div className="flex max-w-[56px] ml-2 flex-1 inline divide-x-2 divide-slate-400 text-white h-full font-light">
                  <button
                    className="flex-1 bg-indigo-500 md:w-6 h-full hover:bg-indigo-600"
                    onClick={increaseQuantity}
                    aria-label="increaseQuantity">
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="h-3/4 align-middle"
                    />
                  </button>
                  <button
                    className="flex-1 bg-indigo-400 h-full hover:bg-indigo-500"
                    onClick={decreaseQuantity}
                    aria-label="decreaseQuantity">
                    <FontAwesomeIcon
                      icon={faMinus}
                      className="h-3/4 align-middle"
                    />
                  </button>
                </div>
              </div>
            </div>
            <button
              className="w-fit space-x-2 px-2 hover:bg-slate-300"
              onClick={deleteItem}>
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
  cartItem: PropTypes.object.isRequired
};
