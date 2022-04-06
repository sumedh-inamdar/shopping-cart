import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPiedPiperSquare } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

export default function Nav({ cartQty }) {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  useEffect(() => {
    if (mobileMenuVisible)
      window.addEventListener('click', mobileMenuClickHandler);
  }, [mobileMenuVisible]);

  function toggleMobileMenu() {
    setMobileMenuVisible(!mobileMenuVisible);
    const menu = document.querySelector('.mobile-menu');
    menu.classList.toggle('hidden');
  }
  function mobileMenuClickHandler(event) {
    if (event.target.closest('nav') === null) closeMobileModal();
  }

  function closeMobileModal() {
    setMobileMenuVisible(false);
    const menu = document.querySelector('.mobile-menu');
    menu.classList.add('hidden');
    window.removeEventListener('click', mobileMenuClickHandler);
  }

  return (
    <nav className="bg-gradient-to-r from-teal-500 to-indigo-500 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={toggleMobileMenu}>
              {mobileMenuVisible ? (
                <div className="text-4xl w-10 h-10 pt-1">X</div>
              ) : (
                <svg
                  className="w-10 h-10"
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
          <div className="flex space-x-7 min-w-fit">
            <div>
              <Link
                className="flex items-center text-3xl md:text-4xl py-4 px-2"
                to="/"
                onClick={closeMobileModal}>
                <FontAwesomeIcon
                  icon={faPiedPiperSquare}
                  className="mr-2 md:pb-2.5"
                />
                <div className="flex flex-row justify-start content-center pt-2.5 md:pt-0">
                  <div className="font-bold">TENNS</div>
                  <div className="font-light">CENTRL</div>
                </div>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link
                className="py-4 px-2 navLink text-2xl font-light hover:text-zinc-600 transition duration-300"
                to="/">
                HOME
              </Link>
              <Link
                className="py-4 px-2 navLink text-2xl font-light hover:text-zinc-600 transition duration-300"
                to="/store">
                STORE
              </Link>
              <Link
                className="py-4 px-2 navLink text-2xl font-light hover:text-zinc-600 transition duration-300"
                to="/about">
                ABOUT
              </Link>
            </div>
          </div>
          <div className="relative flex items-center pt-2.5">
            <Link
              className="text-2xl py-2 px-2 hover:text-zinc-600 transition duration-300"
              to="/checkout"
              onClick={closeMobileModal}>
              <FontAwesomeIcon icon={faShoppingCart} />
              <div className="absolute top-[10px] left-[25px] bg-orange-600 rounded-[50%] h-6 w-6 m-auto">
                <div className="text-center w-full h-full text-base">
                  {cartQty}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden mobile-menu transition duration-300">
        <ul className="">
          <li className="active">
            <Link
              to="/"
              onClick={closeMobileModal}
              className="block text-sm px-4 py-4 text-white hover:bg-green-600 font-semibold">
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/store"
              onClick={closeMobileModal}
              className="block text-sm px-4 py-4 hover:bg-green-600 transition duration-300">
              STORE
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={closeMobileModal}
              className="block text-sm px-4 py-4 hover:bg-green-600 transition duration-300">
              ABOUT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
Nav.propTypes = {
  cartQty: PropTypes.number
};
