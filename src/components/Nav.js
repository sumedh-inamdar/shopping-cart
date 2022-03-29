import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
  return (
    <nav className="flex justify-around items-center h-20 bg-lime-600 text-white">
      <h3 className="font-josefin font-bold text-4xl">
        TENNS <span className="font-light">CENTRL</span>
      </h3>
      <ul className="flex w-1/2 justify-around items-center list-none">
        <Link className="navLink text-2xl" to="/">
          <li>Home</li>
        </Link>
        <Link className="navLink text-2xl" to="/store">
          <li>Store</li>
        </Link>
        <Link className="navLink text-2xl" to="/about">
          <li>About</li>
        </Link>
        <Link className="navLink text-2xl" to="/checkout">
          <li>
            <FontAwesomeIcon icon={faShoppingCart} />
          </li>
        </Link>
      </ul>
    </nav>
  );
}
