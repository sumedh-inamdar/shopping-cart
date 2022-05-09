import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function HamburgerButton({
  setMobileMenuVisible,
  mobileMenuVisible
}) {
  return (
    <div className="md:hidden flex items-center">
      <button
        className="outline-none mobile-menu-button"
        onClick={() => {
          setMobileMenuVisible(!mobileMenuVisible);
        }}>
        {mobileMenuVisible ? (
          <div className="text-4xl w-8 h-8">
            <FontAwesomeIcon icon={faXmark} />
          </div>
        ) : (
          <svg
            className="w-8 h-8"
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
  );
}
HamburgerButton.propTypes = {
  setMobileMenuVisible: PropTypes.func.isRequired,
  mobileMenuVisible: PropTypes.bool.isRequired
};
