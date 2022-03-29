import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.jpg';

export default function Nav() {
  return (
    <nav className="bg-lime-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link className="flex items-center py-4 px-2" to="/">
                <img src={logo} alt="logo" className="h-16 mr-2 rounded-md" />
                <h3 className="font-bold text-4xl">
                  TENNS <span className="font-light">CENTRL</span>
                </h3>
              </Link>
            </div>
            <ul className="flex w-1/2 justify-around items-center list-none">
              <Link className="navLink text-2xl font-light mx-2" to="/">
                <li>HOME</li>
              </Link>
              <Link className="navLink text-2xl font-light mx-2" to="/store">
                <li>STORE</li>
              </Link>
              <Link className="navLink text-2xl font-light mx-2" to="/about">
                <li>ABOUT</li>
              </Link>
            </ul>
          </div>
          <Link className="navLink text-2xl mx-2" to="/checkout">
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
