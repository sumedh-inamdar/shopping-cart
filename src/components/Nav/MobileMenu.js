import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MobileMenu({ clickHandler }) {
  return (
    <div className="transition duration-300" onClick={clickHandler}>
      <ul className="">
        <li className="active">
          <Link
            to="/"
            className="block text-sm px-4 py-4 text-white hover:bg-green-600 font-semibold">
            HOME
          </Link>
        </li>
        <li>
          <Link
            to="/store"
            className="block text-sm px-4 py-4 hover:bg-green-600 transition duration-300">
            STORE
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="block text-sm px-4 py-4 hover:bg-green-600 transition duration-300">
            ABOUT
          </Link>
        </li>
      </ul>
    </div>
  );
}
MobileMenu.propTypes = {
  clickHandler: PropTypes.func.isRequired
};
