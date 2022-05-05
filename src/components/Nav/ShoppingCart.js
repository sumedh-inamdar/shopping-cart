import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

export default function ShoppingCart({ clickHandler, cartQty }) {
  return (
    <div className="relative flex items-center pt-2.5" onClick={clickHandler}>
      <Link
        className="text-2xl py-2 px-2 hover:text-zinc-600 transition duration-300"
        to="/checkout">
        <FontAwesomeIcon icon={faShoppingCart} />
        <div className="absolute top-[10px] left-[25px] bg-orange-600 rounded-[50%] h-6 w-6 m-auto">
          <div className="text-center w-full h-full text-base">{cartQty}</div>
        </div>
      </Link>
    </div>
  );
}
ShoppingCart.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  cartQty: PropTypes.number.isRequired
};
