import React from 'react';
import {
  findItemInCart,
  setCartItemQuantity,
  calcCartItemPrice
} from '../../../utils/helperFunc';
import { useContext } from 'react';
import { CartContext, SetCartContext } from '../../../App';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

export default function AddButton({
  cartItemObj,
  setCartItemObj,
  setViewModal
}) {
  const cart = useContext(CartContext);
  const setCart = useContext(SetCartContext);

  function addToCart() {
    setCartItemObj({
      ...cartItemObj,
      unitPrice: calcCartItemPrice(cartItemObj.item.price, cartItemObj.options)
    });
    const cartItem = findItemInCart(cartItemObj, cart);
    if (cartItem) {
      setCartItemQuantity(
        cart,
        setCart,
        cartItem.quantity + cartItemObj.quantity,
        cartItem.id
      );
    } else {
      setCart([...cart, cartItemObj]);
      setCartItemObj({ ...cartItemObj, id: uniqid() });
    }
    setViewModal(true);
  }

  return (
    <button
      className="block px-3 py-2 mt-4 bg-lime-200 hover:bg-lime-300"
      onClick={addToCart}>
      Add to Cart
    </button>
  );
}
AddButton.propTypes = {
  cartItemObj: PropTypes.object.isRequired,
  setCartItemObj: PropTypes.func.isRequired,
  setViewModal: PropTypes.func.isRequired
};
