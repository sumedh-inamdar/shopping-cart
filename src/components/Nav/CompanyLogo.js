import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPiedPiperSquare } from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';

export default function CompanyLogo({ clickHandler }) {
  return (
    <div onClick={clickHandler}>
      <Link className="flex items-center text-3xl md:text-4xl py-4 px-2" to="/">
        <FontAwesomeIcon icon={faPiedPiperSquare} className="mr-2 md:pb-2.5" />
        <div className="flex flex-row justify-start content-center pt-2.5 md:pt-0">
          <div className="font-bold">TENNS</div>
          <div className="font-light">CENTRL</div>
        </div>
      </Link>
    </div>
  );
}
CompanyLogo.propTypes = {
  clickHandler: PropTypes.func.isRequired
};
