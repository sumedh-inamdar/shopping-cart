import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';

export default function ItemAddedModal({ cartItem, closeModal }) {
  return (
    <div>
      <div
        className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
        id="my-modal"
        onClick={closeModal}></div>
      <div
        className="fixed inset-y-0 right-0 w-[50vw] md:w-96 shadow-lg bg-white py-6 px-4 animate-modal-slide-left"
        id="itemAdded">
        <div className="flex justify-between content-center w-full text-xl">
          <div className="h-fit">Item Added!</div>
          <div
            onClick={closeModal}
            className="cursor-pointer text-xl text-slate-400 hover:text-slate-600">
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
        <hr className="border-1 border-slate-200 my-2" />
        <div className="flex flex-col md:flex-row mb-2">
          <img
            className="w-16 h-auto p-2 mx-auto md:mx-2"
            src={cartItem.item.image}
            alt={cartItem.item.name}
          />
          <div className="flex-1 m-auto">
            <div className="text-lg">{cartItem.item.name}</div>
            <div className="text-sm">
              {cartItem.options.map((option) => (
                <div key={uniqid()}>
                  {Object.keys(option)[0]}:{' '}
                  <span className="font-light">{Object.values(option)[0]}</span>
                </div>
              ))}
              <div>
                Quantity:{' '}
                <span className="font-light">{cartItem.quantity}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <button
            onClick={closeModal}
            className="block w-full text-center border-2 py-2 transition-all hover:bg-slate-600 hover:text-white">
            Continue Shopping
          </button>
          <div>
            <Link to="/checkout">
              <button className="block w-full text-center border-2 py-2 bg-teal-400 transition-all hover:bg-teal-600 ">
                View Cart & Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
ItemAddedModal.propTypes = {
  cartItem: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired
};
