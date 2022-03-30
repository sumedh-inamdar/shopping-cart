import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPiedPiperSquare } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import logo from '../assets/logo.jpg';

function toggleMobileMenu() {
  const menu = document.querySelector('.mobile-menu');
  menu.classList.toggle('hidden');
}

export default function Nav() {
  return (
    <nav className="bg-gradient-to-r from-teal-500 to-indigo-500 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={toggleMobileMenu}>
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
            </button>
          </div>
          <div className="flex space-x-7 min-w-fit">
            <div>
              <Link
                className="flex items-center text-3xl md:text-4xl py-4 px-2"
                to="/">
                <FontAwesomeIcon
                  icon={faPiedPiperSquare}
                  className="mr-2 pb-2.5"
                />
                <div className="flex flex-row justify-start content-center">
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
          <div className="flex items-center space-x-3 ">
            <Link
              className="text-2xl py-2 px-2 hover:text-zinc-600 transition duration-300"
              to="/checkout">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden mobile-menu">
        <ul className="">
          <li className="active">
            <Link
              to="/"
              className="block text-sm px-2 py-4 text-white bg-green-600 font-semibold">
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/store"
              className="block text-sm px-2 py-4 hover:bg-green-600 transition duration-300">
              STORE
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block text-sm px-2 py-4 hover:bg-green-600 transition duration-300">
              ABOUT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
